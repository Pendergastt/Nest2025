import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { PedidoDto } from 'src/dtos/PedidoDto';
import { ComprasService } from 'src/services/compras.service';
import { Response } from 'express';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

 @Get("rango")
 rango(@Query("precioMin") precioMin:number, @Query("precioMax") precioMax:number){
  return this.comprasService.mostrarPedido(precioMin,precioMax);

  }

@Post("altaPedido")
  async nuevoPedido(@Body() pedido:PedidoDto,@Res() response:Response){
    const resp:boolean=await this.comprasService.altaPedido(pedido);
    if(resp){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }
} 


  

