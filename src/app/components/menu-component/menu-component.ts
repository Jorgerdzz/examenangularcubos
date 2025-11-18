import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu-component',
  imports: [RouterLink],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
  providers: [ServiceCubos]
})
export class MenuComponent implements OnInit{

  public marcas!: Array<string>

  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ){}

  ngOnInit(): void {
    this._service.getMarcas().subscribe(response=>{
      this.marcas = response;
    })
  }

  cerrarSesion(): void{
    sessionStorage.clear();
    this._router.navigate(['/']);
  }

}
