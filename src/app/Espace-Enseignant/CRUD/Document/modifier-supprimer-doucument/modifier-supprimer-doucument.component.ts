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

  constructor(
    private route : Router,
    private _service : ServiceEspaceEnseignantService,
    public dialogRef: MatDialogRef<ModifierSupprimerDoucumentComponent>,
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
    this._service.AjouterDoucument(Doc,localStorage.getItem("token")).subscribe(()=>{
      console.log("ok")
    },(err)=>{
      console.log(err)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


 


}
