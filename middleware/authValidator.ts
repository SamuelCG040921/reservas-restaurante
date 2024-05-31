import { NextFunction,Request,Response } from 'express';
import {check, validationResult} from 'express-validator';

export let validatorParams = [
    check('email').isEmail(),
    check('password').isLength({min:8,max:16})
]

export const validator = async (req:Request,res:Response, next:NextFunction) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}