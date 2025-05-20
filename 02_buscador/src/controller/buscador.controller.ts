import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { BuscadorService } from 'src/service/buscador.service';
import { Item } from 'src/model/item';

@Controller('buscador')
export class BuscadorController {
  constructor(private readonly buscadorService: BuscadorService) {}

  @Get("buscar/:tematica")
  buscar(@Param("tematica")tematica:string):Item[]{
    return this.buscadorService.buscar(tematica);
  }

  //@Get("buscar/:tematica")
  //buscar(@Param("tematica")tematica:string):Item[]{
  //  return this.buscadorService.buscar(tematica);

  //}

  @Post("alta")
  altaItem(@Body()item:Item):void{

    return this.buscadorService.alta(item);

  }

}