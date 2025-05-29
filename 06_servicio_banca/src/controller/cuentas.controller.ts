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
  Res,
} from '@nestjs/common';
import { Cuenta } from 'src/models/cuenta';
import { CuentasService } from 'src/service/cuentas.service';
import { Response } from 'express';

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

  // endpoint que a partir del dni devuelva sus cuentas.
  // Si cliente no existe o no tiene cuenta devuelve error 419

/*
  @Get("dni/:dni")
  buscarPorDni(@Param("dni") dni:number){
    console.log(dni)

    return this.cuentasService.findByDni(dni);
    
    }
*/
      @Get("dni/:dni")
  async buscarPorDni(@Param("dni") dni:number, @Res() response:Response){
    const resultado = await this.cuentasService.findByDni(dni);
    if (resultado.length>0){
      response.status(200).json(resultado) // Como el resultado es un array de cuentas, tenemos que ponerle s
    }else{
      response.status(418).json([])
    }
    }

    @Post("alta")
altaCuentas(@Body() datos:any){

  const cuenta:Cuenta=datos.cuenta;
  const dnis:number[]=datos.dni;
  this.cuentasService.altaCuenta(cuenta,dnis)

}



  }

