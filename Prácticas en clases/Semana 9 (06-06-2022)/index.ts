import { config } from 'dotenv'
config()

import { Server } from './server'

const server = new Server();

server.listen()



// import express, { Request, Response } from 'express'
// const app = express();
// const port = 3000;
// app.get('/',(req: Request, res:Response) =>{
//     res.json({
//         msg:'oks'
//     })
// })
// app.listen(port,()=>{
//     console.log(`prueba funcionando`)
// })
