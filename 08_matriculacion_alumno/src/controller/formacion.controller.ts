import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { AlumnosService } from 'src/service/alumnos.service';
import { CursosService } from 'src/service/cursos.service';
import { MatriculasService } from 'src/service/matriculas.service';
import { Response } from 'express';
import { MatriculaNuevaDto } from 'src/dtos/MatriculaNuevaDto';

@Controller('formacion')
export class FormacionController {
    constructor(
      private alumnosService:AlumnosService,
      private cursosService:CursosService,
      private matriculasService:MatriculasService
    ){}

    @Post("matricular")
    async matricularAlumno(@Body() datos:MatriculaNuevaDto, @Res() response:Response){
      const resultado:boolean= await this.matriculasService.matricular(datos.usuario,datos.curso);
      if(resultado){
       response.status(200).send();
      }else {
        response.status(409).send();
      }
    }

    @Get("alumnos/:curso")
    buscarAlumnos(@Param("curso") curso:number){
      return this.alumnosService.buscarAlumno(curso)
        
    }

    @Get("cursos")
    buscarCurso(){
      return this.cursosService.buscarCurso();


    }


  }




