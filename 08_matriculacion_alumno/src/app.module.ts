import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './model/Alumno';
import { Curso } from './model/Curso';
import { CursosService } from './service/cursos.service';
import { AlumnosService } from './service/alumnos.service';
import { MatriculasService } from './service/matriculas.service';
import { FormacionController } from './controller/formacion.controller';

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
  controllers: [FormacionController],
  providers: [CursosService, AlumnosService, MatriculasService],
})
export class AppModule {}
