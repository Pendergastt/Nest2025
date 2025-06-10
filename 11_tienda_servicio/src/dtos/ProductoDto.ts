export class ProductoDto{

    producto:string;
    precio:number;
    disponibilidad:string;

    constructor(

    producto:string,
    precio:number,
    disponibilidad:string

    ){

        this.producto=producto;
        this.precio=precio;
        this.disponibilidad=disponibilidad;

    }

}