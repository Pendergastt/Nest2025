import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Matricula } from "./Matricula";

@Entity("cursos") //nombre de la tabla
export class Curso{

    @PrimaryGeneratedColumn()
    idCurso:number;
    @Column()
    nombre:string;
    @Column()
    duracion:number;
    @Column()
    fechaInicio:Date;
    @Column()
    precio:number;

    @OneToMany(()=>Matricula,(m)=>m.curso)
    matriculas:Matricula[]; //un curso, muchas matriculas


    constructor(idCurso:number,nombre:string,duracion:number,fechaInicio:Date,precio:number){

        this.idCurso=idCurso;
        this.nombre=nombre;
        this.duracion=duracion;
        this.fechaInicio=fechaInicio;
        this.precio=precio;
    }


}