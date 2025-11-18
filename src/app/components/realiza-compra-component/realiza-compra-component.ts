import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realiza-compra-component',
  imports: [FormsModule],
  templateUrl: './realiza-compra-component.html',
  styleUrl: './realiza-compra-component.css',
  providers: [ServiceCubos]
})
export class RealizaCompraComponent implements OnInit{

  public idCubo!: number;
  public cubos!: Array<Cubo>;

  constructor(
    private _service:ServiceCubos,
    private _router: Router
  ){

  }

  ngOnInit(): void {
    if(sessionStorage.length===0){
      this._router.navigate(['/login'])
    }else{
      this._service.getCubos().subscribe(response=>{
        this.cubos = response;
      })
    }
  }

  realizarCompra(idCubo: number): void{
    this._service.realizarCompra(idCubo).subscribe(()=>{
      console.log("Compra realizada");
      this._router.navigate(['/compras'])
    })
  }

}
