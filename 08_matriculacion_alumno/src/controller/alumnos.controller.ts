import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Alumno } from 'src/model/Alumno';
import { AlumnosService } from 'src/service/alumnos.service';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}
@Get("nomat/:curso")
buscarAlumnos(@Param("curso") curso:number):Promise<Alumno[]>{
  return this.alumnosService.buscarAlumno(curso)


}

agregarAlumnos(){}



}
