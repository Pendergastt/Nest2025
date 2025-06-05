import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

@Entity("matriculas")
export class Matricula{


        @PrimaryColumn() //como los dos son primaryKey tienen que estas estos dos
        idCurso:number;
        @PrimaryColumn()
        usuario:string;

        // El probmela es que el idCurso lo hemos metido dentro de una propiedad, con lo que tenemos que decirle lo que más abajo pondremos
        // Que el idCurso forma parte de la propiedad curso .idCurso
        // Y que el usuario forma parte de la propiedad alumno .Usuario


        @ManyToOne(()=>Alumno, (a)=>a.matriculas)
        @JoinColumn({name:"usuario",referencedColumnName:"usuario"})
        
        //Hay que indicar qué columna relaciona matriculas con alumnos
        // en name, la columna de matriculas
        // en referenced, la columna de alumnos
        alumno:Alumno;

        @ManyToOne(()=>Curso, (c)=>c.matriculas)
        @JoinColumn({name:"idCurso",referencedColumnName:"idCurso"}) //Hay que indicar qué columna relaciona matriculas con cursos
        curso:Curso;

        @Column()
        nota:number;

        constructor(
        
        alumno:Alumno,
        curso:Curso,
        nota:number
        ){
        this.alumno=alumno;
        this.curso=curso;
        this.nota=nota;
        
        // Antes de poner el if, el constructor intentaba crear datos a partir de curso y usuario y decía que no podía leer las propiedades.
        // No podía leerlas porque de primeras tiene un alumno pero no le dices específicamente cual.
        // Para evitar que coja esos campos lo que le ponemos es un IF. Un if que diga que si hay curso entonces lo haga.
        // Si no, si no hay alumno o no hay curso, entonces no lo hace.

        if(curso){
                this.idCurso=curso.idCurso;
                };
        if(alumno){
        this.usuario=alumno.usuario;
                };
        }
}