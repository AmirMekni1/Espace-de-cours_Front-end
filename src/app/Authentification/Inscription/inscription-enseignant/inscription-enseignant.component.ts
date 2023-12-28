import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-enseignant',
  templateUrl: './inscription-enseignant.component.html',
  styleUrls: ['./inscription-enseignant.component.scss']
})
export class InscriptionEnseignantComponent implements OnInit {

  constructor(private _service:ServiceAuthentificationService,private router:Router){

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
  public Enseignant = {
    NomPrenom :"",
    Email : "",
    Mot_De_Pass :"",
    R_Mot_De_Pass :"",
    Verification : "",
    Role :"",
    NumeroDeTelephone:""
  }

  image : any

GetPhoto(img:any){
this.image=img.target.files[0];
}

inscriptionEnseignant(){
  let enseignantI = new FormData();
  enseignantI.append("NomPrenom",this.Enseignant.NomPrenom);
  enseignantI.append("Email",this.Enseignant.Email);
  enseignantI.append("Mot_De_Pass",this.Enseignant.Mot_De_Pass);
  enseignantI.append("Verification","false");
  enseignantI.append("Role","Enseignant");
  enseignantI.append("image",this.image);
  enseignantI.append("Telephone",this.Enseignant.NumeroDeTelephone);

  this._service.inscriptionEnseignant(enseignantI).subscribe(()=>{
    console.log(enseignantI);
    this.router.navigate(["/"]);
  });

}
}
