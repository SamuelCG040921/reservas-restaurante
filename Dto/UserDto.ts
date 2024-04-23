import internal from "stream";

class User {
    email: string;
    nombres: string;
    apellidos: string;
    telefono: string;
    password: string;
    cantidadPersonas: number;
    preferenciasDieta: string;
    
    constructor(
        email: string, nombres: string,
        apellidos: string, telefono: string,
        password: string,  cantidadPersonas: number,
        preferenciasDieta: string,
       
    ) {
        this.email = email;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.password = password
        this.cantidadPersonas = cantidadPersonas;
        this.preferenciasDieta =preferenciasDieta;
        
    }
}

export default User;