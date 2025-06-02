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

        return await this.alumnoRepository.createQueryBuilder("alumno")
        .innerJoin("alumno.cursos","c")
        .where("alumno.curso!=:curso",{curso:curso})
        .distinct(true)
        .getMany()

    }

    matricularAlumno(nuevoAlumno:Alumno){

        this.alumnoRepository.save(nuevoAlumno)

    }

}
