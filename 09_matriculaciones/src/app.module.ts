import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

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
