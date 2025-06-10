import { Response } from 'express';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { PedidoAltaDto } from 'src/DTOS/PedidoAltaDto';
import { PedidosService } from 'src/service/pedidos.service';
import { ProductosService } from 'src/service/productos.service';
import { ProductoDto } from 'src/DTOS/ProductoDto';

@Controller('tienda')
export class PedidosController {
  constructor(
    private readonly pedidosService: PedidosService,
    private productosService:ProductosService
  ) {}

  // Necesitamos el alta de pedido de productos y pedidos
  // Necesitamos el catalogo de producto y listado de pedidos

  @Post("alta/pedido")
  async altaPedido(@Body() pedido:PedidoAltaDto, @Res() response:Response){
      const respuesta:boolean = await this.pedidosService.altaPedido(pedido);
      if(respuesta){
        console.log("Pedido bien "+pedido.producto+" "+pedido.unidades)
        return response.status(202).send()
      }else{
        console.log("Pedido mal "+pedido.producto+" "+pedido.unidades)
        return response.status(418).send()
      }

  }
  @Get("pedidos")
  mostrarPedido(){
   return this.pedidosService.mostrarPedido()
  }

        @Post("alta/producto")
  async altaProducto(@Body() producto:ProductoDto, @Res() response:Response){
      const respuesta:boolean = await this.productosService.altaProducto(producto);
      if (respuesta){
        return response.status(202).json({producto});
      }else{
        return response.status(418).send("Producto ya en la lista")
          
        }

  
  }
  @Get("productos")
  mostrarProductos(){
   return this.productosService.mostrarCatalogo()
  }

}
