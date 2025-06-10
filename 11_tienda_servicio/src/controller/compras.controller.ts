import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ComprasService } from 'src/services/compras.service';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

 @Get("rango")
rango(@Query() precioMin:number, @Query() precioMax:number){
  this.comprasService.mostrarPedido(precioMin,precioMax)

}
  
}
