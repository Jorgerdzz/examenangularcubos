import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
  providers:[ServiceCubos]
})
export class LoginComponent {

  public user!: User;

  constructor(
    private _service:ServiceCubos,
    private _router:Router
  ){
    this.user = {
      idUsuario: 0,
      nombre: "",
      email: "",
      password: ""
    }
  }

  login(): void{
    this._service.login(this.user).subscribe(response=>{
      let token = response.response;
      sessionStorage.setItem('token', token);
      this._router.navigate(['/perfil'])
    })
  }

}
