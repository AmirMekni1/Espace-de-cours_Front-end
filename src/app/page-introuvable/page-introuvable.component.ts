import { Component } from '@angular/core';
import { ServiceEspaceEnseignantService } from '../Espace-Enseignant/Service/service-espace-enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-introuvable',
  templateUrl: './page-introuvable.component.html',
  styleUrls: ['./page-introuvable.component.scss']
})
export class PageIntrouvableComponent {

  profile = {
    Role:""
  }

  constructor(private _service: ServiceEspaceEnseignantService , private route : Router) {
    if(this._service.IsUser()==true){
   let data = this._service.GetDataProfile();
   this.route.navigate(["http://localhost:4200/"+data.Role])
    }
  }

}
