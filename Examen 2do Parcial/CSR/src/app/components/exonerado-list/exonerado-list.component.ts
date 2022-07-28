import { Component, OnInit } from '@angular/core';
// CAMBIAR POR INTERFACE QUE PIDA
import { IExonerado } from 'src/app/interfaces/IExonerado';
import { ExoneradoService } from 'src/app/services/exonerado.service';

@Component({
  selector: 'app-exonerado-list',
  templateUrl: './exonerado-list.component.html',
  styleUrls: ['./exonerado-list.component.css']
})
export class ExoneradoListComponent implements OnInit {

  public exonerado : IExonerado[] = [];

  constructor(

    private _exoneradoService : ExoneradoService

  ) { }

  ngOnInit(): void {
    this.obtenerTodosExonerados();
  }

  obtenerExonerados(){
    this._exoneradoService.readPrestamos().subscribe(response => {
      this.exonerado = response.data
    })
  }

  public obtenerTodosExonerados(){
    this.obtenerExonerados();
  }

  eliminarExonerado(iduser : string | undefined){
    if(iduser){
      this._exoneradoService.delete(iduser).subscribe(({}) => {
        this.obtenerTodosExonerados();
      })
    }
  }

}
