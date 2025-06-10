import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { PedidoDatosDto } from 'src/DTOS/PedidoDatosDto';
import { Pedido } from 'src/Modelos/Pedido';
import { Repository } from 'typeorm';
import { PedidoAltaDto } from 'src/DTOS/PedidoAltaDto';
import { Producto } from 'src/Modelos/Producto';

@Injectable()
export class PedidosService {

constructor(
  @InjectRepository(Pedido) private pedidosRepository:Repository<Pedido>,
  @InjectRepository(Producto) private productoRepository:Repository<Producto>
){}

/*
async altaPedido(pedido:PedidoAltaDto):Promise<boolean>{
  const resultado = await this.productoRepository.createQueryBuilder("producto")
  .innerJoinAndSelect("producto.producto","p")
  .where()

}

*/

async altaPedido(pedido:PedidoAltaDto):Promise<boolean>{
  const prod:Producto = await this.productoRepository.findOneBy({producto:pedido.producto});
  if(!prod || prod.stock<pedido.unidades){
    return false
  }else{
    //si llega aquí hay stock suficiente y actualizamos el stock del producto
    prod.stock=prod.stock-pedido.unidades
    this.productoRepository.save(prod)
    //por ultimo guardamos el pedido
    const pedidoNuevo:Pedido = new Pedido(0,pedido.unidades,pedido.unidades*prod.precioUnitario,new Date,prod)
    this.pedidosRepository.save(pedidoNuevo)
  }


}



async mostrarPedido():Promise<PedidoDatosDto[]>{
  // Como tenemos las columns relacionadas no hace falta hacer consulta a la otra tabla
  // el único repositorio que hace falta es el de pedidos, así que llamamos al repositorio de pedido
  
  const resultado = await this.pedidosRepository.createQueryBuilder("pedido")
  // Nos traemos los datos de la columna con el innerJoinAndSelect
  .innerJoinAndSelect("pedido.producto","p")
  .getMany();
  // En el return tenemos que hacer un map para crear nuestro DTO porque es lo que queremos devolver
  
  return resultado.map(m=>new PedidoDatosDto(m.producto.producto,m.unidades,m.total,m.fechaPedido))

}


}
