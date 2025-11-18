import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CubosMarcaComponent } from './components/cubos-marca-component/cubos-marca-component';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilUsuarioComponent } from './components/perfil-usuario-component/perfil-usuario-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { RealizaCompraComponent } from './components/realiza-compra-component/realiza-compra-component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cubos/:marca", component: CubosMarcaComponent},
    {path: "login", component: LoginComponent},
    {path: "perfil", component: PerfilUsuarioComponent},
    {path: "compras", component: ComprasComponent},
    {path: "comprar", component: RealizaCompraComponent}
];
