import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEspaceEtudiantService } from '../../service/service-espace-etudiant.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalData } from 'src/app/Espace-Enseignant/profile/mise-a-jour/mise-a-jour.component';

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
    private _service : ServiceEspaceEtudiantService,
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
    

    let data = this._service.GetDataProfile()
    this._service.DataEt(data.id,localStorage.getItem("token")).subscribe((Result:any)=>{

   
      let Doc = new FormData()
    Doc.append("Email",this.Documents.Email)
    Doc.append("DateLimitte",this.Documents.DateLimitte)
    Doc.append("Fichier",this.Documents.Fichier)
    Doc.append("texte",this.Documents.texte)
    Doc.append("id",localStorage.getItem("x"))

    Doc.append("NomPrenom",Result[0].NomPrenom)
    Doc.append("image",Result[0].image)

    console.log(Result.NomPrenom)
    console.log(Result.image)

    if (this.Documents.DateLimitte=="" ){
      alert("Choisir une Date Limitte")
    } else if (this.Documents.texte=="" ){
      if (this.Documents.Fichier=="" ){
        alert("Champs texte est vide")
      }else{alert(" Acune Document")}
      
    }else{
    this._service.AjouterDoucument(Doc,localStorage.getItem("token")).subscribe(()=>{
      
      console.log("ok")
    },(err)=>{
      
      console.log(err)
    })}
    },()=>{

    })
   
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


 


}
