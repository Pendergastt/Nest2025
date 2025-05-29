import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { MoreThan, Repository } from 'typeorm';
import { Cuenta } from 'src/models/cuenta';
import { Movimiento } from 'src/models/movimiento';
import { Cliente } from 'src/models/cliente';

@Injectable()
export class CuentasService {
constructor(

@InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>,
@InjectRepository(Cuenta) private movimientosRepository:Repository<Movimiento>,
@InjectRepository(Cliente) private clientesRepository:Repository<Cliente>)

{}

// Inyectamos el repositorio pero le decimos de qué cuenta y qué tipo

// cuentas que hayan tenido movimientos en fechas

async findMovimientosByFecha(fechaBuscar:Date):Promise<Cuenta[]>{

  const resultado = await this.movimientosRepository.find({ //Traigo la cuenta de MOVIMIENTOS
    where: {
      fecha:fechaBuscar // Le digo que, de la cuenta de MOVIMIENTOS que he traido me busque UNA FECHA.
                        // Ahora tengo, todos los movimientos de una fecha.
    },
    relations: ["cuentas"]  // Ahora le digo que esto está relacionado con cuentas.
                            // En Cuentas, va a mirar las fehcas que sean iguales
  })

  return [...new Set(resultado.map(m=>m.cuenta))] //
} 

async findByExtractosSuperiores(importeSacado:number):Promise<Cuenta[]>{

  const resultado = await this.movimientosRepository.find({

    where: {
      cantidad: MoreThan(importeSacado) //traigo los movimientos more than lo que ponga
    },
    relations:["cuentas"] // BUSCO ESO MISMO EN CUENTAS

  })

  return resultado.map(m=>m.cuenta) // Lo mapeo para que me deje solo las cuentas.

}

// cuentas asociadas al titular
async findByDni(dni:number):Promise<Cuenta[]>{

  const cliente:Cliente= await this.clientesRepository.findOne({
    where:{dni:dni},
    relations: ["cuentas"] // el nombre de la columna de la tabla
  })
    
    //busco por DNI y nos devuelve un cliente
  console.log("cliente es ",cliente)
  console.log("Ahora devolvemos cuentas cliente")

  if(cliente) return cliente.cuentas
  else return [];



}





}
