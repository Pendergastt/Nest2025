import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Movimiento } from "./movimiento";

@Entity("cuentas")
export class Cuenta{

    @PrimaryColumn()
    numeroCuenta:number;
    @Column()
    saldo:number;
    @Column()
    tipoCuenta:string;
    @OneToMany(()=>Movimiento, movimiento=>movimiento.cuenta)
    movimientos:Movimiento[];
    // De esta manera relacionsmos la tabla MOVIMIENTO con CUENTA.
    // One Cuenta to Many movimientos.
    // le decimos que la cuenta va a tener una relación mediante CUENTA movimiento.cuenta

    constructor(numeroCuenta?:number,saldo?:number,tipoCuenta?:string){

        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;
        this.tipoCuenta=tipoCuenta;

    }

}