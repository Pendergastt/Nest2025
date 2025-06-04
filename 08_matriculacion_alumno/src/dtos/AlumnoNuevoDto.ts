import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Max, Min } from "class-validator";

export class AlumnoNuevoDto{

    @IsString()
    @IsNotEmpty()
    @Length(4,20)
    usuario:string;
    @IsString()
    @Length(6,12)
    password:string;
    @IsString()
    nombre:string;
    @IsEmail()
    email:string;
    @IsNumber()
    @Min(19)
    @Max(50)
    edad:number;

    constructor(usuario?:string,password?:string,nombre?:string,email?:string,edad?:number){

        this.usuario=usuario;
        this.password=password;
        this.nombre=nombre;
        this.email=email;
        this.edad=edad;

    }



}