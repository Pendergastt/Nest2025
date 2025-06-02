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

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}


}
