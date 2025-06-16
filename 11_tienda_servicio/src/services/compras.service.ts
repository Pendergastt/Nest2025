import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PedidoDto } from 'src/dtos/PedidoDto';
import { ProductoDto } from 'src/dtos/ProductoDto';

@Injectable()
export class ComprasService {
  altaPedido(pedido: PedidoDto): boolean | PromiseLike<boolean> {
    throw new Error('Method not implemented.');
  }
  constructor(
  ){ this.autenticarUsuario()}


  token:string;
  urlGlobal="http://localhost:3000"

  username:string="usuario1";
  password:string="usuario1";
  urlRecursos:string="http://localhost:3000/tienda";
  urlAutenticar:string="http://localhost:3000/autenticacion/login";

  

async mostrarPedido(precioMin:number,precioMax:number):Promise<ProductoDto[]>{

  const response:any = await axios.get(`${this.urlGlobal}/tienda/productos`,{headers:{Authorization:`Bearer ${this.token}`}});
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
      return new ProductoDto(p.producto,p.precioUnitario,disponibilidad)
    } 
  
  )
  
  return producto;

}

async hacerPedido(pedido:PedidoDto):Promise<boolean>{
  try{
  await axios.post(`${this.urlGlobal}/altaPedido`,pedido,{headers:{Authorization:`Bearer ${this.token}`}});
  return true;
  }catch(err){
    return false;
  }
  }

async autenticarUsuario():Promise<any>{
   const response = await axios.post(this.urlAutenticar,{username:this.username,password:this.password});
    this.token = response.data.valorToken
    console.log(this.token);

}


}


