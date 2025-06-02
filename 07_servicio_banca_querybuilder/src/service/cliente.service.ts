import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/models/cliente';
import { Cuenta } from 'src/models/cuenta';
import { Movimiento } from 'src/models/movimiento';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
constructor(
@InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>,
@InjectRepository(Cuenta) private movimientosRepository:Repository<Movimiento>,
@InjectRepository(Cliente) private clientesRepository:Repository<Cliente>)

{}

/* Esta es otra manera antes de hacerlo con querybuilder
async findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]>{
  const cuenta:Cuenta = await this.cuentasRepository.findOne({
    where:{
      numeroCuenta:numeroCuenta},
      relations: ["clientes"]
    })
    return cuenta.clientes
}
*/

  findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]>{
  return this.clientesRepository.createQueryBuilder("cliente")
  .innerJoin("cliente.cuentas","c") //le asignamos a las cuentas de cliente el "nombre" c.
  .where("c.numeroCuenta=:numCuenta",{numCuenta:numeroCuenta})
  // Lo que hemos hecho en la parte de arriba es decirle que donde el c.numeroCuenta sea igual a :numerocuenta y le decimos que el numCuenta es numero de cuenta) REFORMULAR
  .getMany()
}


altaCuenta(){

  
}


}
