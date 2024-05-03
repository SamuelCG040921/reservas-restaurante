import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import { Request, Response } from "express";
import UserService from '../services/UserServices';


let register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      name,
      lastName,
      phoneNumber,
      personQuantity,
      dietPreferences
    } = req.body;

    
    const registerUser = await UserService.register(new User(email, name, lastName, phoneNumber, password, personQuantity, dietPreferences));
    return res.status(201).send(
      { status: 'register ok' }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;