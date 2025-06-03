import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoResultadoDto } from 'src/dtos/CursoResultadoDto';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {
    constructor(
        @InjectRepository(Curso) private cursoRepository:Repository<Curso> //metemos acceso al repositorio de Curso.
    ){}

    async buscarCurso():Promise<CursoResultadoDto[]>{
//tenemos que decirle que vaya al repositorio y busque los cursos
        return (await this.cursoRepository.find()) //esto es una array de 
        .map(c=>new CursoResultadoDto(c.idCurso,c.nombre,c.duracion,c.fechaInicio,c.precio))

    }

}
