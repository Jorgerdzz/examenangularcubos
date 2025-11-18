import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Compra } from '../../models/compra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras-component',
  imports: [],
  templateUrl: './compras-component.html',
  styleUrl: './compras-component.css',
  providers: [ServiceCubos]
})
export class ComprasComponent implements OnInit{

  public compras!: Array<Compra>

  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ){}

  ngOnInit(): void {
    if(sessionStorage.length===0){
      this._router.navigate(['/login'])
    }else{
      this._service.getComprasUsuario().subscribe(response=>{
        this.compras = response;
      })
    }
  }

}
