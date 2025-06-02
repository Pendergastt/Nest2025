import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";

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

    @ManyToMany(()=>Alumno, (alumno)=>alumno.cursos)
    @JoinTable({
    name: "matriculas", //nombre de la tabla intermedia
    joinColumn:{ // como se relaciona con la tabla de cursos
        name: "idCurso", //nombre de la columna intermedia
        referencedColumnName:"idCurso" //nombre de la columna principal con la que se relaciona
        },
    inverseJoinColumn:{ //como se relaciona con la tabla de alumnos
        name:"usuario", // nombre de la columna de la tabla intermedia que se va a relacionar con la de curso
        referencedColumnName:"usuario" //nombre de la columna de la tabla de alumnos con la que se va a relacionar
    },
    })
    
    alumnos:Alumno[]

    constructor(idCurso:number,nombre:string,duracion:number,fechaInicio:Date,precio:number){

        this.idCurso=idCurso;
        this.nombre=nombre;
        this.duracion=duracion;
        this.fechaInicio=fechaInicio;
        this.precio=precio;
    }


}