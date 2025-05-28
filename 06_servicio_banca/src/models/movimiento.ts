import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cuenta } from "./cuenta";

@Entity("movimientos")
export class Movimiento{
    @PrimaryGeneratedColumn()
    idMovimiento:number;
    //@Column()
    //idCuenta:number;  NO HACE FALTA ESTO PORQUE NO LO VAMOS A USAR: AHORA EXPLICAMOS
    @Column({type:"datetime"})
    fecha:Date;
    @Column()
    cantidad:number;
    @Column()
    operacion:string;

    @ManyToOne(()=>Cuenta, cuenta=>cuenta.movimientos) //VARIOS MOVIMIENTOS relacionados con UNA CUENTA
    @JoinColumn({name:"idCuenta",referencedColumnName:"numeroCuenta"}) //Aquí le digo cómo están relacionadas explicitamente
    //
    cuenta:Cuenta;

    constructor(idMovimiento:number,cuenta:Cuenta,fecha:Date,cantidad:number,operacion:string){

        this.idMovimiento=idMovimiento;
        this.cuenta=cuenta;
        this.fecha=fecha;
        this.cantidad=cantidad;
        this.operacion=operacion;
    }
    
}