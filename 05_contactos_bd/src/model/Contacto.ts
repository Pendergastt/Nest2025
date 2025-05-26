import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("contactos")// En la entidad PONEMOS EL NOMBRE DE LA TABLA
export class Contacto{
    @PrimaryGeneratedColumn()
    idContacto:number;
    @Column()
    nombre:string;
    @Column()
    email:string;
    @Column({nullable:true})
    telefono:number;

    constructor(idContacto?:number,nombre?:string,email?:string,telefono?:number){

        this.idContacto=idContacto;
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;

    }

}