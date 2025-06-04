import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Matricula } from "./Matricula";

@Entity("alumnos")
export class Alumno {
    @PrimaryColumn()
    usuario:string;
    @Column()
    password:string;
    @Column()
    nombre:string;
    @Column()
    email:string;
    @Column()
    edad:number;

    // AÑADIMOS UNA PROPIEDAD
    @OneToMany(()=>Matricula, m=>m.alumno)
    // 1.- entidad con la que está relacionada
    //campo de la otra entidad que está relacionada con este. El campo alumno es el que está relacionado con m.
    matriculas:Matricula[];


    constructor(usuario:string,password:string,nombre:string,email:string,edad:number){

        this.usuario=usuario;
        this.password=password;
        this.nombre=nombre;
        this.email=email;
        this.edad=edad;

    }



}