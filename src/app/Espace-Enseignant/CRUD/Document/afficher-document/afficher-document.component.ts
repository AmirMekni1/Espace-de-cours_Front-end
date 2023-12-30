import { Component, OnInit } from '@angular/core';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';
import { AjouterDocumentComponent } from '../ajouter-document/ajouter-document.component';
import { MatDialog } from '@angular/material/dialog';
import { ModifierSupprimerDoucumentComponent } from '../modifier-supprimer-doucument/modifier-supprimer-doucument.component';

@Component({
  selector: 'app-afficher-document',
  templateUrl: './afficher-document.component.html',
  styleUrls: ['./afficher-document.component.scss']
})
export class AfficherDocumentComponent implements OnInit {

  Doucument = { 
    Email             :   "" ,
    NomMatier         :   "" ,
    image             :   "" ,
    Classe            :   "" ,   
    cle_Etudiant      :   "" ,
  }
  arrayDoc : [] = [];
  image : any
  
  constructor(private _service : ServiceEspaceEnseignantService,public dialog: MatDialog){
    let data = this._service.GetDataProfile()
    this._service.GetMatiere(data.Email,localStorage.getItem("token")).subscribe((d:any)=>{
      this.Doucument=d[0]
      console.log(d)
    })
    this.image = data.image
    this.Doucument.Email = data.Email
  }
  ngOnInit(): void {
    this._service.GetDocuments(this.Doucument.Email,localStorage.getItem("token")).subscribe((dataDoc)=>{
      this.arrayDoc = dataDoc    
       console.log(dataDoc)
     })
     
    
  }

  OpenDialog(): void {
    const dialogRef = this.dialog.open(AjouterDocumentComponent, {
      width: '30%',
    });
    console.log(this.arrayDoc)
  }

  OpenDialogModifierSupprimer(): void {
    const dialogRef = this.dialog.open(ModifierSupprimerDoucumentComponent, {
      width: '30%',
    });
    console.log(this.arrayDoc)
  }
  

  //__________________________________________________________________________________________________

  
}
