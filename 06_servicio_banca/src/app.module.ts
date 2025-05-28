import { Module } from '@nestjs/common';
import { Movimiento } from './models/movimiento';
import { MovimientosService } from './service/movimientos.service';
import { MovimientosController } from './controller/movimientos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from './models/cuenta';

@Module({
  imports: [TypeOrmModule.forRoot({ 
type: 'mysql', 
host: 'localhost', 
port: 3306, 
username: 'nestuser', 
password: 'nestpass', 
database: 'bancabd', 
entities: [Movimiento, Cuenta], 
synchronize: false, 
}),
TypeOrmModule.forFeature([Movimiento, Cuenta])],
  controllers: [MovimientosController],
  providers: [MovimientosService],
})
export class AppModule {}
