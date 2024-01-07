import { Component } from '@angular/core';
import { ServiceEspaceEtudiantService } from '../../service/service-espace-etudiant.service';

@Component({
  selector: 'app-rejoindre-a-cours',
  templateUrl: './rejoindre-a-cours.component.html',
  styleUrls: ['./rejoindre-a-cours.component.scss']
})
export class RejoindreACoursComponent {

  constructor(private _service : ServiceEspaceEtudiantService){}

  code=""

  rejoindreAmatiere(){
    const data = this._service.GetDataProfile()
    this._service.RejoindreAuMatiere(this.code,data.Email,localStorage.getItem("token")).subscribe(()=>{
      location.reload()
    },()=>{
      alert("Verifier Votre Code")
      location.reload()
    })
  }
}
