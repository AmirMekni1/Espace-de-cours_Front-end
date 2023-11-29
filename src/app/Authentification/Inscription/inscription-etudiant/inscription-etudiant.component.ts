import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-etudiant',
  templateUrl: './inscription-etudiant.component.html',
  styleUrls: ['./inscription-etudiant.component.scss']
})
export class InscriptionEtudiantComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

  }

//___________________________________________________________________________________________________

public Etudiant : {
  NomPrenom :any,
  Email : { type : String },
  Mot_De_Pass :{ type : String },
  R_Mot_De_Pass :{ type : String },
  Verification : { type : String , default : false  },
  Role :{ type : String },
  image :{ type : File}
  checkbox :{ type : any}
}


}
