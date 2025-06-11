export class UsuarioDto{
    usuario:string;
    password:string;

    constructor(
    usuario:string,
    password:string
    ){

    this.usuario=usuario;
    this.password=password;
    
    }
}