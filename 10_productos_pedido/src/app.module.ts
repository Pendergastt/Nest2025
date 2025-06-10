import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosController } from './controller/pedidos.controller';
import { PedidosService } from './service/pedidos.service';
import { ProductosService } from './service/productos.service';
import { Producto } from './Modelos/Producto';
import { Pedido } from './Modelos/Pedido';

@Module({
  imports: [TypeOrmModule.forRoot({ 
type: 'mysql', 
host: 'localhost', 
port: 3306, 
username: 'nestuser', 
password: 'nestpass', 
database: 'tiendavirtual', 
entities: [Pedido,Producto], 
synchronize: false, 
}),
TypeOrmModule.forFeature([Pedido,Producto])],
  controllers: [PedidosController],
  providers: [PedidosService,ProductosService],
}
)
export class AppModule {}
