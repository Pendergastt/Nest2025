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
import { Movimiento } from 'src/models/movimiento';
import { MovimientosService } from 'src/service/movimientos.service';

@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}

  @Get("/cuenta/:idCuenta")

  consultarCuenta(@Param("idCuenta")idCuenta:number):Promise<Movimiento[]>{
    return this.movimientosService.findByCodigo(idCuenta)

  }
  @Get("fecha")
   consultarFecha(@Query("fechaInicial")fechaInicial:Date,@Query("fechaFinal")fechaFinal:Date):Promise<Movimiento[]>{
    return this.movimientosService.findsByFechas(fechaInicial,fechaFinal)

  }
  
  @Post("alta")
  altaMovimiento(@Body()movimiento:Movimiento):void{
    this.movimientosService.saveMovimiento(movimiento)

  }

  @Get("movscuenta/:IdCuenta")
  buscarPorCuenta(@Param(idCuenta)idCuenta:number){
    this.movimientosService.


  }

  @Get("porSaldoMin/:saldoMin")
  buscarPorSaldoSuperior(saldoMin:number){
    this.movimientosService.findByCuentaSaldoMin(saldoMin);
  }



}
