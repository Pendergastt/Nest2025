export class CursoDto{

        idCurso:number;
        nombre:string;


        constructor(
        nombre?:string,
        idCurso?:number,
        ){
        
        this.nombre=nombre;
        this.idCurso=idCurso;

        }
}