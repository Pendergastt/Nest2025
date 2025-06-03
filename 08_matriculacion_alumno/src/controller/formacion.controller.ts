import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AlumnosService } from 'src/service/alumnos.service';
import { CursosService } from 'src/service/cursos.service';
import { MatriculasService } from 'src/service/matriculas.service';

@Controller('formacion')
export class FormacionController {
    constructor(
      private alumnosService:AlumnosService,
      private cursosService:CursosService,
      private matriculasService:MatriculasService
    ){}

    @Post("matricular")
    matricularAlumno(@Body() usuario:string,curso:number){
      this.matriculasService.matricular(usuario,curso)

    }

    @Get("alumnos/:curso")
    buscarAlumnos(@Param("curso") curso:number){
      this.alumnosService.buscarAlumno(curso)
        
    }

    @Get("cursos")
    buscarCurso(){
      this.cursosService.buscarCurso();


    }


  }




