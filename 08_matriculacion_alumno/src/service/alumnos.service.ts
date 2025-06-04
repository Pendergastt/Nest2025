import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoNuevoDto } from 'src/dtos/AlumnoNuevoDto';
import { AlumnoResultadoDto } from 'src/dtos/AlumnoResultadoDto';
import { Alumno } from 'src/model/Alumno';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {
    constructor(
        @InjectRepository(Alumno) private alumnoRepository:Repository<Alumno>
    )
    {}

/*
    async buscarAlumno(codigoCurso:number):Promise<Alumno[]>{

        const usuariosEnCurso:string[] = (await this.alumnoRepository.createQueryBuilder("alumno")
                .innerJoin("alumno.cursos","c") // BUSCAR UNA LISTA DE ALUMNOS QUE ESTE EN EL CURSO.
                // DESPUES BUSCAR LOS QUE NO ESTÁN EN LA LISTA-- "C" ES CADA ELEMENTO DE ESE JOIN
                .where("c.idCurso=:curso",{curso:codigoCurso})// Esto busca los que estan, giuardarlos en una constante
                // después intentar hacer un pipe o un map de esos alumnos
                .getMany())
                // DESCARGAR BASE DE DATOS DEL REPOSITORIO DE ANTONIO
                .map(a=>a.usuario) //con el map consigo un array de string

        // PRIMERO HEMOS SACADO LOS ALUMNOS DEL CURSO COMO STRING PARA COMPARARLO EN EL SIGUIENTE

        const alumnos = await this.alumnoRepository.createQueryBuilder("alumno")
        // qué hemos hecho? hemos buscado con el querybuilder la lista de alumnos
        // y le hemos dado la condicion WHERE que ALUMNOS.USUARIO NO ESTÁ EN LA variable LISTA donde LISTA ES usuarioEnCurso que son los que ESTABAN EN EL CURSO
        .where("alumno.usuario not in (:...lista)",{lista:usuariosEnCurso}) // los tres puntos los ponemos para, DEL OBJETO LISTA, hacer un array. Los ... era copiar los datos de un objeto en un array
        .getMany();

        return alumnos
    }
*/
        async buscarAlumno(codigoCurso:number):Promise<AlumnoResultadoDto[]>{ //voy a necesitar una alumno.matriculado DTO

        const usuariosEnCurso:string[] = (await this.alumnoRepository.createQueryBuilder("alumno")
                .innerJoin("alumno.cursos","c") // BUSCAR UNA LISTA DE ALUMNOS QUE ESTE EN EL CURSO.
                // DESPUES BUSCAR LOS QUE NO ESTÁN EN LA LISTA-- "C" ES CADA ELEMENTO DE ESE JOIN
                .where("c.idCurso=:curso",{curso:codigoCurso})// Esto busca los que estan, giuardarlos en una constante
                // después intentar hacer un pipe o un map de esos alumnos
                .getMany())
                // DESCARGAR BASE DE DATOS DEL REPOSITORIO DE ANTONIO
                .map(a=>a.usuario) //con el map consigo un array de string

        // PRIMERO HEMOS SACADO LOS ALUMNOS DEL CURSO COMO STRING PARA COMPARARLO EN EL SIGUIENTE

        const alumnos = (await this.alumnoRepository.createQueryBuilder("alumno")
        // qué hemos hecho? hemos buscado con el querybuilder la lista de alumnos
        // y le hemos dado la condicion WHERE que ALUMNOS.USUARIO NO ESTÁ EN LA variable LISTA donde LISTA ES usuarioEnCurso que son los que ESTABAN EN EL CURSO
        .where("alumno.usuario not in (:...lista)",{lista:usuariosEnCurso}) // los tres puntos los ponemos para, DEL OBJETO LISTA, hacer un array. Los ... era copiar los datos de un objeto en un array
        .getMany())
        //.map(a=>new AlumnoResultadoDto(a.usuario,a.password,a.nombre,a.email,a.edad))
        // Siempre que el DTO tenga las mismas PROPIEDADES que la ENTIDAD no hace falta el MAP

        return alumnos
    }

    save(alumno:AlumnoNuevoDto):Promise<AlumnoResultadoDto>{
        return this.alumnoRepository.save(alumno)


    }


}
