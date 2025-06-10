// agrupa los datos que se quieren 

import { IsDate, IsInt, IsNumber } from "class-validator";

export class PedidoDatosDto{

    @IsNumber()
    producto:string;
    @IsInt()
    unidades:number;
    @IsInt()
    total:number;
    @IsDate()
    fechaPedido:Date

    constructor(

        producto?:string,
        unidades?:number,
        total?:number,
        fechaPedido?:Date,
   
    ){
        this.producto=producto;
        this.unidades=unidades;
        this.total=total;
        this.fechaPedido=fechaPedido;

    }


}