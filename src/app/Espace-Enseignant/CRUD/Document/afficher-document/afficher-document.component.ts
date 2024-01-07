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
  Commentaire : String
  arrayDoc : [] = [];
  image : any
  arrayCom : [] = [];
  arrayET : [] = [];
  constructor(private _service : ServiceEspaceEnseignantService,public dialog: MatDialog){
    let data = this._service.GetDataProfile()
    this._service.GetMatiere(data.Email,localStorage.getItem("token")).subscribe((d:any)=>{
      this.Doucument=d[0]
      this.Doucument.cle_Etudiant=localStorage.getItem("x")
    })

    this.image = data.image
    this.Doucument.Email = data.Email

    this._service.GetDocuments(localStorage.getItem("x"),localStorage.getItem("token")).subscribe((dataDoc)=>{
      this.arrayDoc = dataDoc
      
     })


    this._service.Etudiants(localStorage.getItem("x"),localStorage.getItem("token")).subscribe((d)=>{
      this.arrayET = d[0].Les_Etudiants as any
      console.log(d[0].Les_Etudiants)
    })

  }
  ngOnInit(): void {
  
    
  }

  OpenDialog(): void {
    const dialogRef = this.dialog.open(AjouterDocumentComponent, {
      width: '30%',
    });
    
  }

  OpenDialogModifierSupprimer(x:any): void {
    this._service.Set_A(x)
    const dialogRef = this.dialog.open(ModifierSupprimerDoucumentComponent, {
      width: '30%',
    });
    
  }
  

  //__________________________________________________________________________________________________

  EnvoyerCommentaire(x:any){
    console.log(this.Commentaire)
    const commentaireData = { "Commentaire": this.Commentaire };
    this._service.AjouterCommentaireDansDoucument(x,commentaireData,localStorage.getItem("token")).subscribe(()=>{
      location.reload()
    },(err)=>{
      console.log(err)
      location.reload()
    })
  }
  
}
