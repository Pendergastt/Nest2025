import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculasController } from './controller/matriculas.controller';
import { Curso } from './modelos/Curso';
import { Alumno } from './modelos/Alumno';
import { Matricula } from './modelos/Matricula';
import { MatriculacionesService } from './services/matriculaciones.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true}),
  TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          type: 'mysql',
          host: config.get('URL_BD'),
          port: parseInt(config.get('PORT_BD')),
          username: config.get('USERNAME'),
          password: config.get('PASSWORD'),
          database: 'formacion',
          entities: [Curso,Alumno,Matricula],
          synchronize: false, 
        }),
      }) 
 ,
TypeOrmModule.forFeature([Curso,Alumno,Matricula])],
  controllers: [MatriculasController],
  providers: [MatriculacionesService],
})
export class AppModule {}
