import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCuentasDto } from './dto/create-cuentas.dto';
import { UpdateCuentasDto } from './dto/update-cuentas.dto';
import { CuentasService } from './cuentas.service';

@Controller('cuentass')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @Post()
  create(@Body() createCuentasDto: CreateCuentasDto) {
    return this.cuentasService.create(createCuentasDto);
  }

  @Get()
  findAll() {
    return this.cuentasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuentasDto: UpdateCuentasDto) {
    return this.cuentasService.update(+id, updateCuentasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentasService.remove(+id);
  }
}
