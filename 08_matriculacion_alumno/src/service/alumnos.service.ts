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

        let usuariosEnCurso = (await this.alumnoRepository.createQueryBuilder("alumno")
        .innerJoin("alumno.cursos","c") // BUSCAR UNA LISTA DE ALUMNOS QUE ESTE EN EL CURSO.
        // DESPUES BUSCAR LOS QUE NO ESTÁN EN LA LISTA
        .where("c=:curso",{curso:curso})// Esto busca los que estan, giuardarlos en una constante
        // después intentar hacer un pipe o un map de esos alumnos
        .getMany())
        // DESCARGAR BASE DE DATOS DEL REPOSITORIO DE ANTONIO
        .map(a=>a.usuario) //con el map consigo un array de string

        // PRIMERO HEMOS SACADO LOS ALUMNOS DEL CURSO COMO STRING PARA COMPARARLO EN EL SIGUIENTE

        const alumnos = await this.alumnoRepository.createQueryBuilder("alumno")
        // qué hemos hecho? hemos buscado con el querybuilder la lista de alumnos
        // y le hemos dado la condicion WHERE que ALUMNOS.USUARIO NO ESTÁ EN LA variable LISTA donde LISTA ES usuarioEnCurso que son los que ESTABAN EN EL CURSO
        .where("alumno.usuario not in :lista",{lista:usuariosEnCurso})
        .getMany();

        return alumnos
    }


}
