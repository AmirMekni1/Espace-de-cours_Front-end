import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEspaceEtudiantService } from '../../service/service-espace-etudiant.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalData } from 'src/app/Espace-Enseignant/profile/mise-a-jour/mise-a-jour.component';
@Component({
  selector: 'app-modifier-supprimer',
  templateUrl: './modifier-supprimer.component.html',
  styleUrls: ['./modifier-supprimer.component.scss']
})
export class ModifierSupprimerComponent implements OnInit {

  Documents = {
    Email             :     "",
    DateLimitte       :     "",
    Fichier          :     "",
    texte              :     "",
  }
  arrayDoc : [] = [];

  constructor(
    private route : Router,
    private _service : ServiceEspaceEtudiantService,
    public dialogRef: MatDialogRef<ModifierSupprimerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ){

  }
  ngOnInit(): void {
    this._service.GetDocument(this._service.Variable_A,localStorage.getItem("token")).subscribe((dataDoc)=>{
      this.Documents = dataDoc[0]
      this.Documents.Fichier=dataDoc[0].Fichier
     })
    let data = this._service.GetDataProfile()
    this.Documents.Email = data.Email
  }

 

    SupprimerDocument(){
      let verifier = confirm("Tu Veux Supprimer Cette Document");
      if (verifier==true){
        this._service.SupprimerDocument(this._service.Variable_A,localStorage.getItem("token")).subscribe(()=>{
          alert("supprimer avec succes")
          location.reload()
        },()=>{
          alert("Erreur")
        })
      }else{
      }
    }

    Getfile($event: any) {
      this.Documents.Fichier = $event.target.files[0];
      }

    MofifierDocument(){
      let DonneesDoc = new FormData()     
    DonneesDoc.append("Email",this.Documents.Email)                        
    DonneesDoc.append("DateLimitte",this.Documents.DateLimitte)    
    DonneesDoc.append("texte",this.Documents.texte)         
    DonneesDoc.append("Fichier",this.Documents.Fichier)          
        this._service.MiseAjourDocument(this._service.Variable_A,DonneesDoc,localStorage.getItem("token")).subscribe(()=>{
          location.reload()
        },(err)=>{
        })
      }

 

  onNoClick(): void {
    this.dialogRef.close();
  }


 


}
