// agrupa los datos que se quieren 

import { IsDate, IsInt, IsNumber } from "class-validator";

export class PedidoDatosDto{

    @IsNumber()
    idProducto:number;
    @IsInt()
    unidades:number;
    @IsInt()
    total:number;
    @IsDate()
    fechaPedido:Date

    constructor(

        idProducto?:number,
        unidades?:number,
        total?:number,
        fechaPedido?:Date,
   
    ){
        this.idProducto=idProducto;
        this.unidades=unidades;
        this.total=total;
        this.fechaPedido=fechaPedido;

    }


}