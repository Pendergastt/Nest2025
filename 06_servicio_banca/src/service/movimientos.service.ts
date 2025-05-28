import { Cuenta } from 'src/model/cuenta';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from 'src/models/cuenta';
import { Movimiento } from 'src/models/movimiento';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
  constructor(@InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>,@InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>){
  }

resultadoFechas:Movimiento[]=[];
resultadoCuentas:Cuenta[]=[];

saveMovimiento(movimiento:Movimiento):void{

this.movimientosRepository.save(movimiento);

}

findByCodigo(cuenta:number):Promise<Movimiento[]>{

const resultado = this.movimientosRepository.find({
  where: {
    cuenta:{numeroCuenta:cuenta} // mirar y explicar
    },
    relations:["movimientos"]
  })
return resultado;

}


// async findsByFechas(fechaInicial:Date,fechaFinal:Date):Promise<Movimiento[]>{
// const resultado =  await this.movimientosRepository.findBy({
// fecha: Between(fechaInicial,fechaFinal)})
// return this.resultadoFechas=resultado

// }


async findsByFechas(fechaInicial:Date):Promise<Cuenta[]>{
const resultado =  await this.movimientosRepository.findBy({
fecha:fechaInicial}
where )
return this.resultadoFechas=resultado

}



async findMovimientosByCuenta(numCuenta:number,fechaInicial:Date,fechaFinal:Date):Promise<Cuenta[]>{

  const filtroFechas = await this.findsByFechas(fechaInicial,fechaFinal);

   filtroFechas.map(m=>m.numCuenta) // mirar para ver qué pasa

}


async findMovimientosByFecha(fechaBuscar:Date):Promise<Cuenta[]>{

  this.resultadoCuentas = await this.movimientosRepository.find({ //Traigo la cuenta de MOVIMIENTOS
    where: {
      fecha:fechaBuscar // Le digo que, de la cuenta de MOVIMIENTOS que he traido me busque UNA FECHA.
                        // Ahora tengo, todos los movimientos de una fecha.
    },
    relations: ["cuentas"]  // Ahora le digo que esto está relacionado con cuentas.
                            // En Cuentas, 
  })

  return this.resultadoCuentas.map(m=>m.Cuenta) //
} 

  

}



}

