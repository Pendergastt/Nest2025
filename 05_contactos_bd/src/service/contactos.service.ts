import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacto } from 'src/model/Contacto';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ContactosService {

constructor(@InjectRepository(Contacto) private contactosRepository:Repository<Contacto>){}


// No se repiten contactos con el mismo email.
// Si se intenta dar de alta un contacto con el mismo email existente
// no será dado de alta y se devolverá falso
async save(contacto:Contacto):Promise<boolean>{
  const resultado= await this.contactosRepository.findOneBy({email:contacto.email})
  if (resultado) return false
  else {this.contactosRepository.save(contacto); return true}

}

findByNombre(n:string):Promise<Contacto>{

  return this.contactosRepository.findOneBy({nombre:n}) // Le damos un json donde le decimos que el nombre(nombre de la columna) es n (el nombre que le damos nosotros)
}

findAll():Promise<Contacto[]>{

  return this.contactosRepository.find();
}

//Delete devuelve cuantas cosas han sido afectadas. Así que aprovechamos eso
// 
async deleteByEmail(email:string):Promise<boolean>{
  const result:DeleteResult= await this.contactosRepository.delete({email:email})
  return result.affected>0; // Esto mira si el result affected es mayor que 0. Si es así, devuelve true
  
  // Con el delete le dices que elimine en base a una CONDICION

  // Con el remove lo que haces es darle UN OBJETO CONCRETO para borrar. Pero tienes que darselo tú

}


}
