import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Movimiento } from "./movimiento";
import { Cliente } from "./cliente";

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
    
    @ManyToMany(()=>Cliente, cliente=>cliente.cuentas)
    // dada una clase Cliente, en cada objeto de esa clase (llamado cliente) como obtenemos los objetos de esa entidad?
    // En este caso dado un objeto cliente, obtenemos su array de cuentas mediante cliente.cuentas
    // Con las MANY TO MANY siempre tenemos que poner TABLA INTERMEDIA y SOLO EN UNA
    // LAS RELACIONES CON TABLAS INTERMEDIAS SE PONEN EN LA TABLA MANY
    @JoinTable({
    name: 'titulares', // nombre de la tabla de union
    joinColumn: { // la relacion con "cuenta"
      name: 'idCuenta', // el nombre de la columna en la tabla TITULARES.
      referencedColumnName: 'numeroCuenta', // Con qué columna de CUENTAS se relaciona
    },
    inverseJoinColumn: { // la relacion con "clientes"
      name: 'idCliente', //El nombre de la columna de la tabla TITULARES
      referencedColumnName: 'dni', // El nombre de la columna con la que se relaciona en CLIENTE
    },
    })

    clientes:Cliente[]; //aqui hay un valor clientes que esta compuesto de un array de cliente (que recoje todos los clientes relacionados con esa cuenta)



    constructor(numeroCuenta?:number,saldo?:number,tipoCuenta?:string){

        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;
        this.tipoCuenta=tipoCuenta;

    }

}