import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ProductoDto } from 'src/dtos/ProductoDto';

@Injectable()
export class ComprasService {
  constructor(
  ){}

  urlGlobal="http://localhost:3000/"

async mostrarPedido(precioMin:number,precioMax:number):Promise<ProductoDto[]>{

  const response:any = await axios.get(`${this.urlGlobal}/tienda/productos`);
  const resultado = response.data.filter(p=>p.precioUnitario>=precioMin && p.precioUnitario<=precioMax);
  const producto:ProductoDto[] = resultado.map(
    p=>{
      let disponibilidad:string="";
      if (p.stock>=0&&p.stock<=3){
        disponibilidad="baja"
      };
      if (p.stock>=4&&p.stock<=10){
        disponibilidad="media"
      };
      if (p.stock>10){
        disponibilidad="alta"
      };
      new ProductoDto(p.precio,p.precioUnitario,disponibilidad)
    } 
  )
  
  return producto;

}

hacerPedido(){}


}
