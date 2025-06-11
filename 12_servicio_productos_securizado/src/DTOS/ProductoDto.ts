import { IsInt, isNumber, IsNumber, IsString, isString, Max, Min } from "class-validator"

export class ProductoDto{
    @IsNumber()
    codigoProducto:number;
    @IsString()
    producto:string;
    @IsNumber()
    precioUnitario:number;
    @IsInt()
    @Min(0)
    @Max(1000)
    stock:number

    constructor(
    codigoProducto?:number,
    producto?:string,
    precioUnitario?:number,
    stock?:number
    )
    {
        this.codigoProducto=codigoProducto;
        this.producto=producto;
        this.precioUnitario=precioUnitario;
        this.stock=stock;
        

    }

}