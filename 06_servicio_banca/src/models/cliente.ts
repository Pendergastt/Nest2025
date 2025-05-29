import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Cuenta } from "./cuenta";

@Entity("clientes")
export class Cliente{

    @PrimaryColumn()
    dni:number;
    @Column()
    nombre:string;
    @Column()
    direccion:string;
    @Column()
    telefono:number;

    @ManyToMany(()=>Cuenta, (cuenta)=>cuenta.clientes)
    // dos funciones landa; una sin parametros que devuelve el tipo de la otra entidad. De qué tipo es la otra entidad?
    // El segundo parametro nos dice: de un objeto de esa clase, en este caso CUENTA, cómo se obtiene esa relacion.
    cuentas:Cuenta[]; //este es el campo que tiene LAS CUENTAS DEL CLIENTE

constructor(dni: number, nombre: string, direccion: string, telefono: number) {
        this.dni = dni;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    
}
}