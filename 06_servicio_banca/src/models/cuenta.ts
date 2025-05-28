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
    // esto es opcional a poner en el contructor. simplemente vale para definir la relacion. Aunque no existan columnas.
    // Lo ponemos para poder relacionar el una CUENTA con varios MOVIMIENTOS.
    // En la otra pondremos MANY TO ONE siendo varios movimientos CON UNA CUENTA
    movimientos:Movimiento[];

    constructor(numeroCuenta?:number,saldo?:number,tipoCuenta?:string){

        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;
        this.tipoCuenta=tipoCuenta;

    }

}