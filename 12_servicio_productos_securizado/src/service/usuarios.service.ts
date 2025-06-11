import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/Modelos/Usuario';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository:Repository<Usuario>
  ){}

async findByUsername(username: string):Promise<Usuario>{
    
    const usuario:Usuario = await this.usuarioRepository.findOneBy({username:username})
    console.log(usuario)
    return usuario
    }

}

