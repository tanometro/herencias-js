/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {cuentaAhorro} from './cuentaAhorro.js';
import {Empleado} from './empleado.js';
import {Gerente} from './gerente.js';
import {Director} from './director.js';
import {Cuenta} from "./cuenta.js";
import { CuentaNomina } from './cuentaNomina.js';
import { SistemaAutenticacion } from './sistemaAutenticacion.js';


// const cliente = new Cliente('Fran','13804050','123224');
// const cliente2 = new Cliente('María','16979808','8989');

// const cuentaDeFran = new CuentaCorriente(cliente, '1', '001');
// const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

// const cuentaAhorroFran = new cuentaAhorro(cliente, "9985", "001",0);

// console.log(cuentaDeFran);
// cuentaDeLeonardo.depositoEnCuenta(150);
// console.log(cuentaDeFran.verSaldo());
// cuentaDeLeonardo.retirarDeCuenta(70);  
// console.log(cuentaDeFran.verSaldo());
// console.log(cuentaAhorroFran);
// cuentaAhorroFran.depositoEnCuenta(200);
// console.log(cuentaAhorroFran.verSaldo());


const empleado = new Empleado("Juan", "123", 100);
empleado.asignarClave("12345");

const gerente = new Gerente("Pedro", "321", 100);
gerente.asignarClave("1234");

const director = new Director("Jesi", "1234", 100);
director.asignarClave("123");

// console.log(empleado.verBonificacion());
// console.log(gerente.verBonificacion());
// console.log(director.verBonificacion());

console.log(SistemaAutenticacion.login(empleado, 12345));
console.log(SistemaAutenticacion.login(gerente, 1234));
console.log(SistemaAutenticacion.login(director, 123));