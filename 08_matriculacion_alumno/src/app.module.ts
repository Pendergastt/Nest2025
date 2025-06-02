import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './model/Alumno';
import { Curso } from './model/Curso';
import { CursosController } from './controller/cursos.controller';
import { AlumnosController } from './controller/alumnos.controller';
import { CursosService } from './service/cursos.service';
import { AlumnosService } from './service/alumnos.service';

@Module({
  imports: [TypeOrmModule.forRoot({ 
type: 'mysql', 
host: 'localhost', 
port: 3306, 
username: 'nestuser', 
password: 'nestpass', 
database: 'formacion', 
entities: [Alumno, Curso], 
synchronize: false, 
}),
TypeOrmModule.forFeature([Curso, Alumno])],
  controllers: [CursosController, AlumnosController],
  providers: [CursosService, AlumnosService],
})
export class AppModule {}
