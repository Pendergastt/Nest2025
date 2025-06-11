import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDto } from 'src/DTOS/ProductoDto';
import { Producto } from 'src/Modelos/Producto';
import { Repository } from 'typeorm';


@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto) private productoRepository:Repository<Producto>,

  ){
    
  }

   mostrarCatalogo():Promise<ProductoDto[]>{
   return this.productoRepository.find();
   

  }


  async altaProducto(producto:ProductoDto):Promise<boolean>{
    // Buscamos primero si existe un producto con ese codigo
    const respuesta:Producto= await this.productoRepository.createQueryBuilder("producto")
    .where("codigoProducto=:cod",{cod:producto.codigoProducto})
    .getOne(); // No olvidemos el GetOne porque solo estamos buscando uno y si hay uno entonces devuelve la respuesta

    // Si existe no lo damos de alta.
    if(respuesta){
      return false;
    }else{
      this.productoRepository.save(producto);
      return true;
    }

  }

}
