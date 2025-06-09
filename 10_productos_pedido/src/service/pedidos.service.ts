import { Injectable } from '@nestjs/common';
import { CreatePedidosDto } from './dto/create-pedidos.dto';
import { UpdatePedidosDto } from './dto/update-pedidos.dto';

@Injectable()
export class PedidosService {
  create(createPedidosDto: CreatePedidosDto) {
    return 'This action adds a new pedidos';
  }

  findAll() {
    return `This action returns all pedidoss`;
  }

  findOne(id: number) {
    return `This action returns a #id pedidos`;
  }

  update(id: number, updatePedidosDto: UpdatePedidosDto) {
    return `This action updates a #id pedidos`;
  }

  remove(id: number) {
    return `This action removes a #id pedidos`;
  }
}
