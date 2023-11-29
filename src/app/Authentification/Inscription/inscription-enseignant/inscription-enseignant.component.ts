import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-enseignant',
  templateUrl: './inscription-enseignant.component.html',
  styleUrls: ['./inscription-enseignant.component.scss']
})
export class InscriptionEnseignantComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

  }

  //-----------------------------------------------------

  public Enseignant : {
    NomPrenom :any,
    Email : { type : String },
    Mot_De_Pass :{ type : String },
    R_Mot_De_Pass :{ type : String },
    Verification : { type : String , default : false  },
    Role :{ type : String },
    image :{ type : File}
    checkbox :{ type : any}
  }

  Recuperer_Images(){

  }

}
