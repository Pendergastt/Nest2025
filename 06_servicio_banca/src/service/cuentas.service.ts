import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/models/cuenta';

@Injectable()
export class CuentasService {
constructor(@InjectRepository(Cuenta) private cuentasRepository:Repository<Cuenta>){}
// Inyectamos el repositorio pero le decimos de qué cuenta y qué tipo

// cuentas que hayan tenido movimientos en fechas




}
