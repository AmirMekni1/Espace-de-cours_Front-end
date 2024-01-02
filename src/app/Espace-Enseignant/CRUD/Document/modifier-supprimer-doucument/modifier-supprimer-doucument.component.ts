import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';
import { ModalData } from '../../Matiere/ajouter-un-matieres/ajouter-un-matieres.component';

@Component({
  selector: 'app-modifier-supprimer-doucument',
  templateUrl: './modifier-supprimer-doucument.component.html',
  styleUrls: ['./modifier-supprimer-doucument.component.scss']
})
export class ModifierSupprimerDoucumentComponent implements OnInit {

  Documents = {
    Email             :     "",
    DateLimitte       :     "",
    Fichier          :     "",
    texte              :     "",
  }
  arrayDoc : [] = [];

  constructor(
    private route : Router,
    private _service : ServiceEspaceEnseignantService,
    public dialogRef: MatDialogRef<ModifierSupprimerDoucumentComponent>,
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
          console.log("ok")
        },(err)=>{
          console.log(err)
        })
      }

 

  onNoClick(): void {
    this.dialogRef.close();
  }


 


}
