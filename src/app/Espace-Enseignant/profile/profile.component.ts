import { Component } from '@angular/core';
import { ServiceEspaceEnseignantService } from '../Service/service-espace-enseignant.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profile = {
    id: "",
    NomPrenom: "",
    image: "",
    Email :""
  }

  constructor(private _service: ServiceEspaceEnseignantService) {
   let data = this._service.GetDataProfile();
   this.profile.NomPrenom = data.NomPrenom
   this.profile.image = data.image
   this.profile.Email = data.Email
console.log(data.image)
console.log(this.profile.image)

  }



}
