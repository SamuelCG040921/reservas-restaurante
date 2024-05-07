import { Request, Response } from "express";
import { StringifyOptions } from "querystring";
import db from '../config/config-db';
import UserService from "../services/UserServices";

 let getReserves = async(req: Request, res:Response)=>{
    try {
        const emailUser = req.query.email as string;
        const getMyReserves = await UserService.getReserves(emailUser)
        return res.status(200).json(
            {status: 'Obtenido correctamente', email: emailUser, reserves: getMyReserves}
        );
    } catch (error: any) {
        console.error("Error al ejecutar la consulta:", error);
        return res.status(500).json({
            error: "Error al obtener usuarios"
        });
    }
}

export default getReserves