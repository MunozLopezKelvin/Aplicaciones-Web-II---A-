import express,{Router, Express} from "express"
import cors from 'cors'

import { dbConection } from "../Database/Config";

/*aqui declaramos individualmente las rutas 
con las misma estructura pero el nombre RutasCarro deben cambiarlos*/
import {router as RutasEspacios} from '../Routes/Espacios'


class Server{
    app:Router;
    router:Router;
    port:Number;
    paths: {[key:string]:string};
    private _express:Express;

    constructor(){
        this.app= Router();
        this.router=Router();
        this.port=Number( process.env["PORT"])
        //aqui se colocan los path de cada modelo
        this.paths={
            espacios:'/api/espacios'
        }
        this.conectarDb();
        this.middlewares();
        this.routes();
        this.router.use('/v1/sextoa', this.app)
        this._express= express().use(this.router)
    }
    private async conectarDb(){
        await dbConection();
    }
    private middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.espacios, RutasEspacios)
    }
    listen(){

        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto http://localhost:${this.port}/v1/sextoa`)
        }) 
    }
}

export {Server}