import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription-etudiant',
  templateUrl: './inscription-etudiant.component.html',
  styleUrls: ['./inscription-etudiant.component.scss']
})
export class InscriptionEtudiantComponent implements OnInit {

  constructor(private _service : ServiceAuthentificationService, private router : Router){

  }

  ngOnInit(): void {
    if (this._service.IsUser()==true){
     this.router.navigate(["/**"])
    }
     }
   
     //-----------------------------------------------------
   isuser(){
    return this._service.IsUser()
   }
//___________________________________________________________________________________________________

public Etudiant = {
  NomPrenom :"",
  Email : "",
  Mot_De_Pass :"",
  R_Mot_De_Pass :"",
  Verification : "",
  Role :""
}
image : any

GetPhoto(img:any){
this.image=img.target.files[0];
}

inscriptionEtudiant(){
  let etudiantI = new FormData();
  etudiantI.append("NomPrenom",this.Etudiant.NomPrenom);
  etudiantI.append("Email",this.Etudiant.Email);
  etudiantI.append("Mot_De_Pass",this.Etudiant.Mot_De_Pass);
  etudiantI.append("Verification","false");
  etudiantI.append("Role","Etudiant");
  etudiantI.append("image",this.image);

  this._service.inscriptionEtudiant(etudiantI).subscribe(()=>{
    console.log(etudiantI);
    this.router.navigate(["/"]);
  });

}
}
