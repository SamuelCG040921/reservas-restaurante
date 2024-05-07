import db from '../config/config-db';
import Auth from '../Dto/AuthDto';
import User from '../Dto/UserDto';
const bcrypt = require("bcryptjs");


class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, nombres, apellidos, telefono, password, cantidadPersonas, preferenciasDieta) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password, user.cantidadPersonas, user.preferenciasDieta];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT password FROM users WHERE email=?';
        const values = [auth.email];
        return db.execute(sql, values);
        }
    

    static async getReserves(email: string){
        const sql = 'SELECT * FROM reserves WHERE user_email =?'
        const values = [email];
        return db.execute(sql, values);
    }
}


export default UserRepository;