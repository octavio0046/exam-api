import { createPool} from 'mysql2/promise';

export async function  connect(){

   const connection = await  createPool({
        host: 'localhost',
        user:'root',
        password:'root',
        database:'concesionario_exam',
        connectionLimit:10
    });
    return connection;
}



export async function  connectTest(){

    const connection = await  createPool({
         host: 'localhost',
         user:'root',
         password:'root',
         database:'concesionario_examTest',
         connectionLimit:10
     });
     return connection;
 }