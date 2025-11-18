import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  providers: [ServiceCubos]
})
export class HomeComponent implements OnInit{

  public cubos!: Array<Cubo>;

  constructor(
    private _service: ServiceCubos
  ){}


  ngOnInit(): void {
    this._service.getCubos().subscribe(response=>{
      console.log(response)
      this.cubos = response;
    })
  }

}
