import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IExonerado } from 'src/app/interfaces/IExonerado';
import { ExoneradoService } from 'src/app/services/exonerado.service';

@Component({
  selector: 'app-exonerado-edit',
  templateUrl: './exonerado-edit.component.html',
  styleUrls: ['./exonerado-edit.component.css']
})
export class ExoneradoEditComponent implements OnInit {

  public iduser : string | null = null;
  public exonerado : IExonerado = {} as IExonerado;

  constructor(
    private _exoneradoService : ExoneradoService,
    private activateRouter : ActivatedRoute,
    private router : Router,
    
  ) { }

  ngOnInit(): void {
    this.obtenerExonerado();
  }

  obtenerExonerado(){
    this.activateRouter.paramMap.subscribe((param: ParamMap) => {
      this.iduser = param.get('iduser')
      
    })

    if(this.iduser){
      this._exoneradoService.readPrestamo(this.iduser).subscribe((response : IExonerado | any) => {        
        this.exonerado = response.data
      })
    }

  }

  public actualizarExonerado(){{
    if(this.iduser){
      this._exoneradoService.update(this.iduser, this.exonerado).subscribe((response) => {
        this.router.navigate(['/']).then();
      }, (error) => {
        alert(error.error.message);
        
        
      })
    }
  }}

}
