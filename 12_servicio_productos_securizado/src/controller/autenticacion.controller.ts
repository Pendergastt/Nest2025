import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AutenticacionService } from 'src/service/autenticacion.service';

@Controller('autenticacion')
export class AutenticacionController {
constructor(private autenticacionService: AutenticacionService) {}

@Post('login')

async login(@Body() data){
  const usuario=this.autenticacionService.validateUser(data.username,data.password);
  if(!usuario){
    throw new UnauthorizedException();//si no existe el usuario que tire un error
  }
  return this.autenticacionService.login(usuario) // si existe entonces lleva la validación al login para que haga el 
  
}

}
