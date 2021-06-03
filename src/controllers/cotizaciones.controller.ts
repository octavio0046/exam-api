import {Request, Response} from 'express'
import {connect} from '../../database';
import { ICotizaciones } from "../interface/cotizaciones";



export async function getAll(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT co.*,CONCAT(a.Nombres,a.Apellidos) as Agente, CONCAT(cli.Nombres,cli.Apellidos) as Cliente FROM TCCotizaciones co inner join TCAgentes a on a.id=co.TCAgenteId inner join TCClientes cli on cli.id =co.TCClienteId')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newDato:ICotizaciones = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCCotizaciones SET ?', [newDato]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT co.*, cli.Nombres, a.Nombres  FROM TCCotizaciones co inner join TCClientes cli on cli.id= co.TCClienteId inner join TCAgentes a on a.id=co.TCAgenteId  WHERE co.id=? ',[id]);
   return res.json(marcas[0]);
}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCCotizaciones WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:ICotizaciones = req.body;
    await conn.query('UPDATE TCCotizaciones SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}



