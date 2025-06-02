import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from 'src/model/Alumno';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {
    constructor(
        @InjectRepository(Alumno) private alumnoRepository:Repository<Alumno>
    )
    {}


    async buscarAlumno(curso:number):Promise<Alumno[]>{

        const alumnos = this.alumnoRepository.createQueryBuilder("alumno")
        .innerJoin("alumno.cursos","c") // BUSCAR UNA LISTA DE ALUMNOS QUE ESTE EN EL CURSO.
        // DESPUES BUSCAR LOS QUE NO ESTÁN EN LA LISTA
        .where("c=:curso",{curso:curso})// Esto busca los que estan, giuardarlos en una constante
        // después intentar hacer un pipe o un map de esos alumnos
        .getMany()
        // DESCARGAR BASE DE DATOS DEL REPOSITORIO DE ANTONIO
    }

    matricularAlumno(nuevoAlumno:Alumno){

        this.alumnoRepository.save(nuevoAlumno)

    }

}
