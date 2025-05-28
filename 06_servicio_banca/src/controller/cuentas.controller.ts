import {
  Body,
  Controller,
  Delete,
  Get,
  HttpServer,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Cuenta } from 'src/models/cuenta';
import { CuentasService } from 'src/service/cuentas.service';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  
  
  @Get("/movimientos/:fecha") // lo ponemos así por lo de query
  findCuentasPorFecha(@Param("fecha") fecha:Date):Promise<Cuenta[]>{
    return this.cuentasService.findMovimientosByFecha(fecha);

  }
  @Get("saldoSuperior/:cantidad")
  buscarPorCantidad(@Param("cantidad") cantidad:number){
    return this.cuentasService.findByExtractosSuperiores(cantidad);
  }




}
