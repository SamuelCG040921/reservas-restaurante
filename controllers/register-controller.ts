import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import { Request, Response } from "express";


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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await UserRepository.add(new User(email, name, lastName, phoneNumber, hashedPassword, personQuantity, dietPreferences));
    return res.status(201).send(
      { status: 'register ok', password_hasheado: hashedPassword }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;