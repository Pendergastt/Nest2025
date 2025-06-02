import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { In, MoreThan, Repository } from 'typeorm';
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

  return await this.cuentasRepository.createQueryBuilder("cuenta")
  .innerJoin("cuenta.movimientos","m")
  .where("m.cantidad>:cant",{cant:importeSacado})
  // donde m.cantidad sea mayor que una variable "cant" y esta variable "cant" sea el importeSacado (por eso le ponemos el json)
  .getMany()

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

async altaCuenta(cuenta:Cuenta, titulares:number[]){
// recibe un oobjeto cuenta y un array con los DNI de los titulares
// que debe tener esa cuenta. El metodo dará de alta la cuenta
// y asignará esos titulares.

// Como queremos asignar una nueva cuenta a clientes QUE YA EXISTEN en nuestra tabla
// lo primero que tenemos que hacer es buscar los clientes que tenemos en nuestro array en nuestros clientes (la tabla que ya tenemos)
// Así que vamos a hacer un findBy dni dentro de titulares. Esto coge CADA DATO DEL ARRAY TITULARES (en este caso DNI) y los busca.
// Cuando lo encuentra, lo mete en el array. Al final de esta primera lína tendremos el array de clientes
const resultado:Cliente[] = await this.clientesRepository.findBy({dni:In(titulares)});

// Ya tenemos el array de clientes en la variable resultado. Ahora. Las cuentas tienen una propiedad que es CUENTA.CLIENTES.
// Copiamos ese array de clientes resultante en la propiedad cuenta.clientes.
// Así que ahora ya tenemos un OBJETO CUENTA (para dar de alta) cuya propiedad CUENTAS.CLIENTES es el ya el array de los DNI que hemos buscado
// solamente tenemos que decirle que lo oguarde.

cuenta.clientes=resultado
this.cuentasRepository.save(cuenta);


}



}
