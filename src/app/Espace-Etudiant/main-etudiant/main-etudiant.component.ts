import { Component } from '@angular/core';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-main-etudiant',
  templateUrl: './main-etudiant.component.html',
  styleUrls: ['./main-etudiant.component.scss']
})
export class MainEtudiantComponent {
constructor(private _service : ServiceAuthentificationService){

}
user(){
  this._service.IsUser()
}

}
