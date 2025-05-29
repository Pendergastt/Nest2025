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

async findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]>{
  const cuenta:Cuenta = await this.cuentasRepository.findOne({
    where:{
      numeroCuenta:numeroCuenta},
      relations: ["clientes"]
    })
    return cuenta.clientes
}

altaCuenta(){

  
}


}
