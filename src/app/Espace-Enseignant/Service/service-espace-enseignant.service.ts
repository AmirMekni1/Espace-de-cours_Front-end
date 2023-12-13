import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspaceEnseignantService {

  constructor(private connexionBD: HttpClient,) { }

  urlEN = ("http://localhost:3000/Enseignant");

  GetDataProfile(){
    let token = localStorage.getItem("token");
    let Data = JSON.parse(window.atob(token.split('.')[1]));
    return Data
  }
  
}
