import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cubos-marca-component',
  imports: [],
  templateUrl: './cubos-marca-component.html',
  styleUrl: './cubos-marca-component.css',
  providers: [ServiceCubos]
})
export class CubosMarcaComponent implements OnInit{

  public cubos!: Array<Cubo>;

  constructor(
    private _service:ServiceCubos,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params)=>{
      this._service.getCubosMarca(params['marca']).subscribe(response=>{
        this.cubos = response;
      })
    })
  }

}
