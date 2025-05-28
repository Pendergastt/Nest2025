import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimiento } from 'src/models/movimiento';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
  constructor(@InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>){

  }

saveMovimiento(movimiento:Movimiento):void{

this.movimientosRepository.save(movimiento);

}

findByCodigo(cuenta:number):Promise<Movimiento[]>{

const resultado = this.movimientosRepository.find({
  where: {
    cuenta:{numeroCuenta:cuenta} // mirar y explicar
    }
  })
return resultado;

}

findsByFechas(fechaInicial:Date,fechaFinal:Date):Promise<Movimiento[]>{
const resultado =  this.movimientosRepository.findBy({
fecha: Between(fechaInicial,fechaFinal)})

return resultado;
}

}

