import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cubo } from "../models/cubo";
import { environment } from "../../environments/environment.development";
import { User } from "../models/user";
import { Compra } from "../models/compra";

@Injectable()
export class ServiceCubos{

    constructor(
        private _http:HttpClient
    ){}

    getCubos(): Observable<Array<Cubo>>{
        let url = environment.urlApiCubos;
        let request = "api/Cubos";
        return this._http.get<Array<Cubo>>(url + request);
    }

    getMarcas(): Observable<Array<string>>{
        let url = environment.urlApiCubos;
        let request = "api/Cubos/Marcas";
        return this._http.get<Array<string>>(url + request);
    }

    getCubosMarca(marca: string): Observable<Array<Cubo>>{
        let url = environment.urlApiCubos;
        let request = "api/Cubos/CubosMarca/" + marca;
        return this._http.get<Array<Cubo>>(url + request);
    }

    login(user: User): Observable<any>{
        let url = environment.urlApiCubos;
        let request = "api/Manage/Login";
        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");
        return this._http.post(url + request, user, {headers: header});
    }

    getPerfilUsuario(): Observable<User>{
        let url = environment.urlApiCubos;
        let request = "api/Manage/PerfilUsuario";
        let header = new HttpHeaders();
        header = header.set("Authorization", "bearer " + sessionStorage.getItem('token'));
        return this._http.get<User>(url + request, {headers:header});
    }

    getComprasUsuario(): Observable<Array<Compra>>{
        let url = environment.urlApiCubos;
        let request = "api/Compra/ComprasUsuario";
        let header = new HttpHeaders();
        header = header.set("Authorization","bearer " + sessionStorage.getItem('token'))
        return this._http.get<Array<Compra>>(url + request, {headers: header});
    }

    realizarCompra(idCubo: number): Observable<any>{
        let url = environment.urlApiCubos;
        let request = "api/Compra/InsertarPedido/" + idCubo;
        let header = new HttpHeaders();
        header = header.set("Authorization", "bearer " + sessionStorage.getItem('token'))
        return this._http.post(url + request, null, {headers: header})
    }

}