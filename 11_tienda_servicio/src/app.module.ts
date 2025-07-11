import { Module } from '@nestjs/common';
import { ComprasController } from './controller/compras.controller';
import { ComprasService } from './services/compras.service';

@Module({
  imports: [],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class AppModule {}
