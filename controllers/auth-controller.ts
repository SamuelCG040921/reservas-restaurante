const bcrypt = require("bcryptjs");
const db = require('../config/config-db.js');
const jwt = require('jsonwebtoken'); 
import Auth from "../Dto/AuthDto";   
import { Request, Response } from "express";
import {generateToken} from "../helpers/generateToken"
import UserService from "../services/UserServices";


let auth = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const login = await UserService.auth(new Auth(email, password));
            if(login.logged){
                return res.status(200).json({
                    status: login.status,
                    token:  await generateToken(email)
                });
            }   
        
        return res.status(401).json({ 
            status: 'Incorrect username or password'
        });
    } catch (error) {
        console.log(error);
    }
}


export default auth;