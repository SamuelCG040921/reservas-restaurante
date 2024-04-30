const bcrypt = require("bcryptjs");
const db = require('../config/config-db.js');
const jwt = require('jsonwebtoken');    
import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

let auth = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const result : any= await UserRepository.login(email);
        console.log(333, result);
        console.log(password);
        if (result[0].length > 0){
            const isPasswordValid = await bcrypt.compare(password, result[0][0].password);
            

            const accesToken = generateAccesToken(email);

            function generateAccesToken(email: any){
                return jwt.sign( {email: email}, process.env.SECRET, { expiresIn: 60 * 60});
            }
            
            res.header('authorization', accesToken).json({
                message: 'Usuario autenticado',
                Token: accesToken
                
            })

           
            
            
            
        }
        return res.status(401).json({ 
            status: 'Incorrect username or password'
        });
    } catch (error) {
        console.log(error);
    }
}

export default auth;

export async function validateToken(req: Request, res: Response, next : any){
    const accesToken = req.headers['authorization'] || req.query.accesToken;
    if(!accesToken)res.send('Acces denied');

    jwt.verify(accesToken, process.env.SECRET, (err: Error, email: any) =>{
        if(err){
            res.send('Acces denied, token expired or incorrect')
        }else{
            next();
        }
    })
}