import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';
import { ModalData } from '../../Matiere/ajouter-un-matieres/ajouter-un-matieres.component';

@Component({
  selector: 'app-ajouter-document',
  templateUrl: './ajouter-document.component.html',
  styleUrls: ['./ajouter-document.component.scss']
})
export class AjouterDocumentComponent implements OnInit {

  Documents = {
    Email             :     "",
    DateLimitte       :     "",
    Fichier          :     "",
    texte              :     "",
  }

  constructor(
    private route : Router,
    private _service : ServiceEspaceEnseignantService,
    public dialogRef: MatDialogRef<AjouterDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ){

  }
  ngOnInit(): void {
    let data = this._service.GetDataProfile()
    this.Documents.Email = data.Email
  }

  Getfile($event: any) {
    this.Documents.Fichier = $event.target.files[0];
    }

  AjouterDoucument(){
    let Doc = new FormData()
    Doc.append("Email",this.Documents.Email)
    Doc.append("DateLimitte",this.Documents.DateLimitte)
    Doc.append("Fichier",this.Documents.Fichier)
    Doc.append("texte",this.Documents.texte)
    Doc.append("id",localStorage.getItem("x"))
    if (this.Documents.DateLimitte=="" ){
      alert("Choisir une Date Limitte")
    } else if (this.Documents.texte=="" ){
      if (this.Documents.Fichier=="" ){
        alert("Champs texte est vide")
      }else{alert(" Acune Document")}
      
    }else{
    this._service.AjouterDoucument(Doc,localStorage.getItem("token")).subscribe(()=>{
      location.reload()
      console.log("ok")
    },(err)=>{
      location.reload()
      console.log(err)
    })
  }}

  onNoClick(): void {
    this.dialogRef.close();
  }


 


}
