import {
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Param,
  Res
} from '@nestjs/common';
import { Cuenta } from 'src/model/cuenta';
import { CuentasService } from 'src/service/cuentas.service';
import { Response } from 'express';


@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}


  @Post("Cuenta")
altaCuentas(@Body()cuenta:Cuenta, @Res() response:Response):void{
  const resultado:boolean=this.cuentasService.alta(cuenta);
  if(resultado){
    //devolvemos codigo200
    response.status(200).send();
  }else {
    response.status(409).send();
  }
}
  @Get("buscar/saldo/:saldo")
buscarSaldo(@Param("saldo")saldo:number):Cuenta[]{
  return this.cuentasService.buscarSaldo(saldo);
}
@Get("buscar/numero/:numero")
buscarCuenta(@Param("numero")numeroCuenta:string, @Res() response:Response):any{
  const cuenta= this.cuentasService.buscarCuenta(numeroCuenta);
    if(cuenta){
    return response.status(200).json(cuenta)
  }else{
    return response.status(419).json(new Cuenta())
  }

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

