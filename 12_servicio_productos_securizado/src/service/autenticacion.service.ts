import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from './usuarios.service';

@Injectable()
export class AutenticacionService {
    constructor(private usersService: UsuariosService, private jwtService: JwtService ) {}
    // Autentica al usuario. Comprueba que es un usuario valido
    async validateUser(username: string, password: string) {
      const user = await this.usersService.findByUsername(username);
      const valid:boolean=password.trim()==user.password;
      console.log(valid);
      if (user && valid) {
      const { password, ...result } = user; //Esto es un DECONSTRUCTOR.
      // Lo que hace es un nuevo JSON. Pero especificamos que PASSWORD se queda fuera y devolvemos solo el result, que es tod menos el password
      // Lo que hacemos es como "separar" un json en varias cosas y después cogemos lo que queramos.
      // 
      return result;
    }
      return null;
    }
    

    
    async login(user: any) {
      const payload = { username: user.username, sub: user.id, role: user.role };
      return {
        valorToken: this.jwtService.sign(payload),
      };
  }
}

