import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {
    constructor(
        @InjectRepository(Curso) private cursoRepository:Repository<Curso> //metemos acceso al repositorio de Curso.
    ){}

    async buscarCurso():Promise<Curso[]>{
//tenemos que decirle que vaya al repositorio y busque los cursos
        return await this.cursoRepository.find() // Con esto traemos todos los datos de la tabla curso

    }

}
