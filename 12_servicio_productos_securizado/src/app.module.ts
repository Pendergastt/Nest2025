import { JwtStrategy } from './security/jwt.strategy';
import { UsuariosService } from './service/usuarios.service';
import { AutenticacionService } from './service/autenticacion.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosController } from './controller/pedidos.controller';
import { PedidosService } from './service/pedidos.service';
import { ProductosService } from './service/productos.service';
import { Producto } from './Modelos/Producto';
import { Pedido } from './Modelos/Pedido';
import { PassportModule } from '@nestjs/passport';
import { AutenticacionController } from './controller/autenticacion.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
TypeOrmModule.forRoot({ 
type: 'mysql', 
host: 'localhost', 
port: 3306, 
username: 'nestuser', 
password: 'nestpass', 
database: 'tiendavirtual', 
entities: [Pedido,Producto], 
synchronize: false, 
}),

PassportModule,
JwtModule.register({
 secret: 'mysecret',
 signOptions: { expiresIn: '1h' },
}),

TypeOrmModule.forFeature([Pedido,Producto]),
],

controllers: [AutenticacionController,PedidosController],
providers: [JwtStrategy, AutenticacionService, UsuariosService, PedidosService,ProductosService],

}

)
export class AppModule {}
