import { Injectable } from '@nestjs/common';
import { Item } from 'src/model/item';

@Injectable()
export class BuscadorService {

// Esta es lo que llamamos la capa de negocio

repositorio:Item[]=[
    new Item("http://www.fnac.com","libros","libros de todo tipo"),
    new Item("http://www.game.es","juegos","juegos varios"),
    new Item("http://www.retro.com","juegos","juegos retro"),
    new Item("http://www.casadellibro.es","libros","libros en cualquier idioma"),
    new Item("http://www.mytravel","viajes","viajes por todo el mundo")
  ];


  buscar(tematica:string):Item[]{
    return this.repositorio.filter(it=>it.tematica==tematica); //objetos "it" cuya it.temática sea igual que la tematica que le pedimos
  }

  alta(item:Item):void{
    this.repositorio.push(item);
  }



}
