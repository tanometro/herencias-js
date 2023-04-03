export class SistemaAutenticacion {
   static  login (usuario, clave) {
    if ("autenticable" in usuario 
    && usuario.autenticable instanceof Function) {
        return usuario.autenticable(clave);
    }
        return false;
        // return usuario.clave == clave;
}
}