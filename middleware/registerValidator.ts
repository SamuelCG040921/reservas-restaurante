import { NextFunction,Request,Response } from 'express';
import {check, validationResult} from 'express-validator';

export let validatorParams = [
    check('email').isEmail(),
    check('password').isLength({min:8,max:16}),
    check('name').isLength({min:1,max:255}).isString(),
    check('lastName').isLength({min:1,max:255}).isString(),
    check('phoneNumber').isLength({min:7,max:10}).isString(),
    check('personQuantity').isNumeric(),
    check('dietPreferences').isLength({min:1,max:300}).isString()
];

export const validator = async (req:Request,res:Response, next:NextFunction) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

