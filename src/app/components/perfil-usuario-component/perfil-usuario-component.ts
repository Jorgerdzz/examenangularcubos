import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario-component',
  imports: [],
  templateUrl: './perfil-usuario-component.html',
  styleUrl: './perfil-usuario-component.css',
  providers: [ServiceCubos]
})
export class PerfilUsuarioComponent implements OnInit{

  public user!: User;

  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ){}

  ngOnInit(): void {
    if(sessionStorage.length===0){
      this._router.navigate(['/login'])
    }else{
      this._service.getPerfilUsuario().subscribe(response=>{
        this.user = response;
      })
    }
  }

}
