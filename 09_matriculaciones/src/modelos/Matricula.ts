import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

@Entity("matriculas")
export class Matricula{


        @PrimaryColumn()
        idCurso:number;
        @PrimaryColumn()
        usuario:string;

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
        this.idCurso=curso.idCurso;
        this.usuario=alumno.usuario;

        }
}