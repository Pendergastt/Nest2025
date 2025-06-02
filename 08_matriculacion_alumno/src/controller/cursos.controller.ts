import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Curso } from 'src/model/Curso';
import { CursosService } from 'src/service/cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get("todos")
   buscarCurso():Promise<Curso[]>{
  return  this.cursosService.buscarCurso()


}


}
