import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from 'src/models/cuenta';
import { Movimiento } from 'src/models/movimiento';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
  constructor(@InjectRepository(Movimiento) private movimientosRepository:Repository<Movimiento>,
  @InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>){
  }

resultadoFechas:Movimiento[]=[];
resultadoCuentas:Cuenta[]=[];

saveMovimiento(movimiento:Movimiento):void{

this.movimientosRepository.save(movimiento);

}
/*

findByCodigo(cuenta:number):Promise<Movimiento[]>{

const resultado = this.movimientosRepository.find({
  where: {
    cuenta:{numeroCuenta:cuenta} // mirar y explicar
    },
    relations:["movimientos"]
  })
return resultado;
}

*/

findByCodigo(cuenta:number):Promise<Movimiento[]>{

return this.movimientosRepository.createQueryBuilder("movimiento")
.where("movimiento.cuenta.numeroCuenta=:numCuenta",{numCuenta:cuenta})
.getMany()

}


/*
async findsByFechas(fechaInicial:Date,fechaFinal:Date):Promise<Movimiento[]>{
const resultado =  await this.movimientosRepository.findBy({
fecha: Between(fechaInicial,fechaFinal)})
return this.resultadoFechas=resultado

}
*/

findByFechas(fechaInicial:Date,fechaFinal:Date):Promise<Movimiento[]>{
  return this.movimientosRepository.createQueryBuilder("movimiento")
    .where("movimiento.fecha between :f1 and :f2",{f1:fechaInicial,f2:fechaFinal})
    .getMany();
  }



async findByCuentaSaldoMin(saldo:number):Promise<Cuenta[]>{

  const resultado= await this.movimientosRepository.find({
    where: {
      cuenta: {
        saldo: MoreThan(saldo)
      }
    },
    relations: ["cuenta"] //le ponemos EL CAMPO de la relación de la entidad que estás pidiendo
  })
  return resultado.map(m=>m.cuenta)
  }



}



