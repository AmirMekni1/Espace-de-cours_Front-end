import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspaceEtudiantService {

  constructor(private _service: ServiceAuthentificationService, private route: Router) { 

  }
  user(){
this._service.IsUser()
  }
}
