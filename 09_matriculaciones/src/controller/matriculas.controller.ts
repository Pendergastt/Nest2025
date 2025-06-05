import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MatriculacionesService } from 'src/services/matriculaciones.service';

@Controller('matriculaciones')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculacionesService) {}

  @Get("matriculas/:idCurso")
  mastriculasCruso(@Param("idCurso") idCurso:number){
    return this.matriculasService.mostrarAlumnosMatriculados(idCurso);
  }

  @Get("cursos")
  listaCursos(){
    return this.matriculasService.mostrarCursos()
  }

}
