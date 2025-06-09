import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./Producto";


@Entity("pedidos")

export class Pedido{

    @PrimaryGeneratedColumn()
    idPedido:number;
    //@Column()
    //codigoProducto:number;
    @Column()
    unidades:number;
    @Column()
    total:number;
    @Column()
    fechaPedido:Date;

    @ManyToOne(()=>Producto, (producto)=>producto.pedidos)
    @JoinColumn({name:"codigoProducto",referencedColumnName:"codigoProducto"})
    producto:Producto;

    constructor(
        idPedido?:number,
        unidades?:number,
        total?:number,
        fechaPedido?:Date,
        producto?:Producto,

    )
    {

        this.idPedido=idPedido;
        this.producto=producto;
        this.unidades=unidades;
        this.total=total;
        this.fechaPedido=fechaPedido;

    }


}