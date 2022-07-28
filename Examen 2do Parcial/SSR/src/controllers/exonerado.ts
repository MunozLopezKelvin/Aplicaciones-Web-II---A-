import {Request, Response} from 'express';
import { environment } from '../environment/environment';
import axios from 'axios';

const httpAxios = axios.create({
    baseURL : environment.url,
})

class IndexController {

    public index(req: Request, res : Response){
        httpAxios.get(`/`).then(respuesta => {
            // CAMBIAR POR NOMBRE DE VISTA Y  VARIABLE EXONERADOS POR OTRA
            res.render('index-exonerados', {exonerados : respuesta.data.data})            
        })
        httpAxios.post(`/`).then(respuesta => {
            // CAMBIAR POR NOMBRE DE VISTA Y  VARIABLE EXONERADOS POR OTRA
            res.render('', {exonerados : respuesta.data.data})            
        })
    }
    

}

export const indexController = new IndexController();