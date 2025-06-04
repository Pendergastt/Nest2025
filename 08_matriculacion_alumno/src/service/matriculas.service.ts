import { MatriculaNuevaDto } from './../dtos/MatriculaNuevaDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Curso } from 'src/model/Curso';
import { Repository } from 'typeorm';
import { Alumno } from 'src/model/Alumno';

@Injectable()
export class MatriculasService {
    constructor(
        @InjectRepository(Curso) private cursoRepository:Repository<Curso>,
        @InjectRepository(Alumno) private alumnoRepository:Repository<Alumno>
    ){}

async matricular(matricula:MatriculaNuevaDto):Promise<boolean>{
        
        const alumno:Alumno = await this.alumnoRepository.createQueryBuilder("alumno") //encuentra el alumno por usuario que quieres matricular
        .innerJoinAndSelect("curso.alumnos","a") //esto trae también los alumnos que pertenecen al curso
        .where("alumno.usuario=:usuarioMatricular",{usuarioMatricular:matricula.usuario})
        .getOne();

        const curso:Curso = await this.cursoRepository.createQueryBuilder("curso") //encuentra el alumno por usuario que quieres matricular
        .where("curso.idCurso=:IdCurso",{idCurso:matricula.idCurso})
        .getOne();

        if (!alumno || !curso){
            return false
        }
        
        curso.alumnos.push(alumno); // Como repository te devuelve un 
        await this.cursoRepository.save(curso) // 
        return true

        }
}



