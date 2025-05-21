import { Injectable } from '@nestjs/common';
import { Cuenta } from 'src/model/cuenta';

@Injectable()
export class CuentasService {

/*cuentas:Cuenta[]=[
{
    "numero_cuenta": "ES2100123456789012345678",
    "saldo": 15230.75,
    "titular": "Carlos Méndez",
    "tipo_cuenta": "Cuenta Corriente"
  },
  {
    "numero_cuenta": "ES3200765432109876543210",
    "saldo": 840.50,
    "titular": "Laura Sánchez",
    "tipo_cuenta": "Cuenta de Ahorro"
  },
  {
    "numero_cuenta": "ES4100987654321098765432",
    "saldo": 5000.00,
    "titular": "Miguel Torres",
    "tipo_cuenta": "Cuenta Corriente"
  },
  {
    "numero_cuenta": "ES5100234567890123456789",
    "saldo": 120.90,
    "titular": "Andrea López",
    "tipo_cuenta": "Cuenta Nómina"
  },
  {
    "numero_cuenta": "ES6100345678901234567890",
    "saldo": 9800.00,
    "titular": "Luis Rodríguez",
    "tipo_cuenta": "Cuenta Empresa"
  },
  {
    "numero_cuenta": "ES7200456789012345678901",
    "saldo": 320.75,
    "titular": "María González",
    "tipo_cuenta": "Cuenta Ahorro"
  },
  {
    "numero_cuenta": "ES8300567890123456789012",
    "saldo": 7200.00,
    "titular": "Javier Morales",
    "tipo_cuenta": "Cuenta Corriente"
  },
  {
    "numero_cuenta": "ES9400678901234567890123",
    "saldo": 210.00,
    "titular": "Patricia Ruiz",
    "tipo_cuenta": "Cuenta Nómina"
  },
  {
    "numero_cuenta": "ES0500789012345678901234",
    "saldo": 14500.25,
    "titular": "Fernando Gil",
    "tipo_cuenta": "Cuenta Empresa"
  },
  {
    "numero_cuenta": "ES1600890123456789012345",
    "saldo": 75.10,
    "titular": "Elena Navarro",
    "tipo_cuenta": "Cuenta Ahorro"
  }

];ES2100123456789012345678
*/

cuentas: Cuenta[]=[
    new Cuenta ("ES2100123456789012345678", 15230.75, "Carlos Méndez", "Cuenta Corriente"),
    new Cuenta ("ES3200765432109876543210", 840.50, "Laura Sánchez", "Cuenta Ahorro"),
    new Cuenta ("ES4100987654321098765432", 5000.00, "Miguel Torres", "Cuenta Corriente"),
    new Cuenta ("ES5100234567890123456789", 120.90, "Andrea López", "Cuenta Nómina"),
    new Cuenta ("ES6100345678901234567890", 9800.00, "Luis Rodríguez", "Cuenta Empresa"),
    new Cuenta ("ES7200456789012345678901", 320.75, "María González", "Cuenta Ahorro"),
    new Cuenta ("ES8300567890123456789012", 7200.00, "Javier Morales", "Cuenta Corriente"),
    new Cuenta ("ES9400678901234567890123", 210.00, "Patricia Ruiz", "Cuenta Nómina"),
    new Cuenta ("ES0500789012345678901234", 14500.25, "Fernando Gil", "Cuenta Empresa"),
    new Cuenta ("ES1600890123456789012345", 75.10, "Elena Navarro", "Cuenta Ahorro" ),
  ]

alta(cuenta:Cuenta){

    if(this.cuentas.some(c=>c.numero_cuenta==cuenta.numero_cuenta)) return false;
    else {this.cuentas.push(cuenta);
    }


}

buscarCuenta(numeroCuenta:string):Cuenta{
    return this.cuentas.find(c=>c.numero_cuenta==numeroCuenta);
}

buscarTipo(tipoCuenta:string):Cuenta[]{
  return this.cuentas.filter(c=>c.tipo_cuenta==tipoCuenta);
}
buscarSaldo(saldoCuenta:number):Cuenta[]{
  return this.cuentas.filter(c=>c.saldo>=saldoCuenta);
}

eliminarCuenta(numeroCuenta:string):Cuenta[]{
  console.log("cuenta "+numeroCuenta+" borrada");
  console.log(numeroCuenta)
  return this.cuentas.filter(c=>c.numero_cuenta!=numeroCuenta);
}

}