import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
// CAMBIAR POR NOMBRE DE INTERFACE QUE PIDA
import { IExonerado } from '../interfaces/IExonerado';

@Injectable({
  providedIn: 'root'
})
export class ExoneradoService {

  url = 'http://localhost:3000/api/exam/';

  constructor(
    private _http: HttpClient
  ) { }

  createPrestamo(exonerado : IExonerado) : Observable<any>{
    return this._http.post(this.url + 'agregar', exonerado);
  }

  readPrestamos() : Observable<any>{
    return this._http.get(this.url);
  }

  readPrestamo(iduser: string) : Observable<any>{
    return this._http.get(this.url + 'ver/' + iduser);
  }

  update(iduser: string, exonerado : IExonerado) : Observable<any>{
    return this._http.patch(this.url + 'editar/' + iduser, exonerado);
  }

  delete(iduser: string) : Observable<any>{
    return this._http.delete(this.url + 'eliminar/' + iduser);
  }

}
