import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspaceEnseignantService {

  constructor() { }


  GetDataProfile(){
    let token = localStorage.getItem("token");
    let Data = JSON.parse(window.atob(token.split('.')[1]));
    return Data
  }
}
