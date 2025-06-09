import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Pedido } from "./Pedido";

@Entity("productos")
export class Producto{
    @PrimaryColumn()
    codigoProducto:number;
    @Column()
    producto:string;
    @Column()
    precioUnitario:number;
    @Column()
    stock:number;

    @OneToMany(()=>Pedido, (pedido)=>pedido.producto)
    pedidos:Pedido[];

    constructor(

        codigoProducto?:number,
        producto?:string,
        precioUnitario?:number,
        stock?:number,
        //pedidos?:Pedido[]


    ){

        this.codigoProducto=codigoProducto;
        this.producto=producto;
        this.precioUnitario=precioUnitario;
        this.stock=stock;
        //this.pedidos=pedidos

    }

}