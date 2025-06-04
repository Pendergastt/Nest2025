import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculaDatosDto } from 'src/DTOs/MatriculaDatosDto';
import { Alumno } from 'src/modelos/Alumno';
import { Curso } from 'src/modelos/Curso';
import { Matricula } from 'src/modelos/Matricula';
import { Repository } from 'typeorm';

@Injectable()
export class MatriculacionesService {

constructor(
  @InjectRepository(Alumno) private alumnoRepository:Repository<Alumno>,
  @InjectRepository(Curso) private cursoRepository:Repository<Curso>,
  @InjectRepository(Matricula) private matriculaRepository:Repository<Matricula>
  ){}

/*
  mostrarAlumnosMatriculados(curso:number):Promise<MatriculaDatosDto>{
    this.matriculaRepository.createQueryBuilder("curso")
    .innerJoinAndSelect("curso.matricula")
      .where(curso.matricula)
    })
*/

  async mostrarAlumnosMatriculados(idCurso:number):Promise<MatriculaDatosDto[]>{
    //como estamos buscando las matriculas primero tenemos que conseguir el array de matriculas
    const matriculas:Matricula[] = await this.matriculaRepository.createQueryBuilder("matricula")
    .innerJoin("matricula.curso","c")
    .innerJoin("matricula.alumno","a")
    .where("c.idCurso=:idCurso",{idCurso:idCurso})
    .getMany(); // lo que me devuelve aquí es una Matricula. Esta atricula tiene UN ALUMNO Y UNA MATRICULA
    // Pero cada alumno es un objeto que tienen más propiedades, igual que el curso.
    // Para ver lo que devolvemos tenemos que crear los DTO que nos enseñaran lo que queremos.

    return matriculas.map(m=>new MatriculaDatosDto(m.alumno.nombre,m.alumno.email,m.curso.nombre,m.nota))

    //



  }


}
