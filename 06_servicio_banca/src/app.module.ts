import { Module } from '@nestjs/common';
import { Movimiento } from './models/movimiento';
import { MovimientosService } from './service/movimientos.service';
import { MovimientosController } from './controller/movimientos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from './models/cuenta';
import { CuentasService } from './service/cuentas.service';
import { CuentasController } from './controller/cuentas.controller';
import { Cliente } from './models/cliente';

@Module({
  imports: [TypeOrmModule.forRoot({ 
type: 'mysql', 
host: 'localhost', 
port: 3306, 
username: 'nestuser', 
password: 'nestpass', 
database: 'bancabd', 
entities: [Movimiento, Cuenta, Cliente], 
synchronize: false, 
}),
TypeOrmModule.forFeature([Movimiento, Cuenta, Cliente])],
  controllers: [MovimientosController, CuentasController],
  providers: [MovimientosService, CuentasService],
})
export class AppModule {}
