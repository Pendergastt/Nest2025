import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoAltaDto } from 'src/dtos/CursoAltaDto';
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
        return (await this.cursoRepository.find()) // EL MAP PODEMOS NO HACERLO SIEMPRE QUE LOS DTO Y LAS ENTIDADES TENDAN LAS MISMAS PROPIEDADES. 
        //.map(c=>new CursoResultadoDto(c.idCurso,c.nombre,c.duracion,c.fechaInicio,c.precio))
        // Devuelve el array y con un map hacemos que nos cree un CursoresultadoDto por cada curso del array.

    }

        save(curso:CursoAltaDto):Promise<CursoResultadoDto>{ //le ponemos que devuelva un cursoresultadoDTO para que nos devuelva el curso completo con el ID.
            //porque el .save lo que hace es añadirlo a la base de datos, le añade un id de curso y luego lo que te devuelve, te lo devuelve todo.

            return this.cursoRepository.save(curso); //ya está. Llamamos al save del repository con el curso que creamos

        }

}
