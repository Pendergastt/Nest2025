import {
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Param
} from '@nestjs/common';
import { Cuenta } from 'src/model/cuenta';
import { CuentasService } from 'src/service/cuentas.service';



@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}


  @Post("Cuenta")
altaCuentas(@Body()cuenta:Cuenta){
  this.cuentasService.alta(cuenta)
}
  @Get("buscar/saldo/:saldo")
buscarSaldo(@Param("saldo")saldo:number):Cuenta[]{
  return this.cuentasService.buscarSaldo(saldo)
}
@Get("buscar/numero/:numero")
buscarCuenta(@Param("numero")numeroCuenta:string):Cuenta{
  return this.cuentasService.buscarCuenta(numeroCuenta)
}
@Get("buscar/tipo/:tipo")
buscarTipo(@Param("tipo")tipo:string):Cuenta[]{
  return this.cuentasService.buscarTipo(tipo)
}

@Delete('borrar/:numero')
borrarNumero(@Param("numero")numeroCuenta:string):Cuenta[]{
  return this.cuentasService.eliminarCuenta(numeroCuenta);
}

}

