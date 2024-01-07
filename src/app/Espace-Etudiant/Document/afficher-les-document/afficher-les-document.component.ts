import { Component, OnInit } from '@angular/core';
import { AjouterDocumentComponent } from '../ajouter-document/ajouter-document.component';
import { ModifierSupprimerComponent } from '../modifier-supprimer/modifier-supprimer.component';
import { ServiceEspaceEtudiantService } from '../../service/service-espace-etudiant.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-afficher-les-document',
  templateUrl: './afficher-les-document.component.html',
  styleUrls: ['./afficher-les-document.component.scss']
})
export class AfficherLesDocumentComponent implements OnInit {

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
  constructor(private _service : ServiceEspaceEtudiantService,public dialog: MatDialog){
    let data = this._service.GetDataProfile()
    this._service.Matiere(localStorage.getItem("x"),localStorage.getItem("token")).subscribe((d:any)=>{
      this.Doucument=d[0]
      this.Doucument.cle_Etudiant=localStorage.getItem("x")
    })
    this.image = data.image
    this.Doucument.Email = data.Email
    this._service.GetDocuments(localStorage.getItem("x"),localStorage.getItem("token")).subscribe((dataDoc)=>{
      this.arrayDoc = dataDoc
      console.log(this.arrayDoc)
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
    const dialogRef = this.dialog.open(ModifierSupprimerComponent, {
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
