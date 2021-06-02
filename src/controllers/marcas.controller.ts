import {Request, Response} from 'express'
import {connect} from '../../database';
import { IMarcas } from "../interface/marcas";



export async function getMarcas(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT * FROM TCMarcas')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newMarca:IMarcas = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCMARCAS SET ?', [newMarca]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT * FROM TCMARCAS WHERE id=? ',[id]);
   return res.json(marcas[0]);
}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCMARCAS WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:IMarcas = req.body;
    await conn.query('UPDATE TCMARCAS SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}










