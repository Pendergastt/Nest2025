import { Controller, Get, Param, Query, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';
import { Ficha } from './model/Ficha';

@Controller("saludos") //es para una carpeta concreta donde están todos esos saludos
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("general") //con el metodo get y pidiendole GENERAL nos devuelve esto en concreto
  // Podemos poner otro @get con otra funcion que se ejecute con el get y el nombre
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("personal/:name")
  getHelloPersonal(@Param("name") nombre:string):string{ //le damos un valor a lo que lea la funcion
    return this.appService.getHello()+": "+nombre;

  }

  @Get("completo")
  getHelloCompleto(@Query("name")nombre:string,@Query("age")edad:number):string{

    return this.appService.getHello()+" te llamas: "+nombre+" y tienes "+edad+" años."

  }

  @Get("ficha/:name/:age")// Aquí le estamos diciendo que la dirección del REST para que nos devuelva los datos es esa:
  // /name/age y te devuelve la ficha que es el JSON.
  // Pero este path variables no es lo más adcuado. Lo mejor es para búsquedas
  getFicha(@Param("name")nombre:string,@Param("age")edad:number):Ficha{ // FICHA es lo que devuelve
    // Lo que hacemos es poner @Param para cada parámetro que tenemos que darle o que tiene que recibir
    return new Ficha(nombre,edad,"juan@Email.com")

  }
  @Post("alta")
  postAltaFicha(@Body()ficha:Ficha):Ficha{

    console.log(ficha.nombre+"-"+ficha.edad+"-"+ficha.email)
    return ficha
  }



}
