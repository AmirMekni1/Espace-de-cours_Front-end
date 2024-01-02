import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEspaceEnseignantService } from '../Service/service-espace-enseignant.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  

  image : any
  nom:any
  constructor(private route : Router,private _service: ServiceEspaceEnseignantService) {
    let data = this._service.GetDataProfile();
   this.image = data.image
   this.nom = data.NomPrenom
  }

  logout() {
   const verif = confirm("Voulez-vous vous déconnecter ?")
   
   if (verif){
    localStorage.removeItem("token")
    this.route.navigate(["/"])
  }else{

  }
  }

  
  
}