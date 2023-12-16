import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';
import { ModalData } from '../../Matiere/ajouter-un-matieres/ajouter-un-matieres.component';

@Component({
  selector: 'app-ajouter-un-classe',
  templateUrl: './ajouter-un-classe.component.html',
  styleUrls: ['./ajouter-un-classe.component.scss']
})
export class AjouterUnClasseComponent {


  Classe = {
    Email : "",
    NomDeClasse : "",
    image : ""

  }
Getphoto($event: any) {
this.Classe.image = $event.target.files[0];
}

  constructor(
    private route : Router,
    private _service : ServiceEspaceEnseignantService,
    public dialogRef: MatDialogRef<AjouterUnClasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
   let data = this._service.GetDataProfile()
   this.Classe.Email = data.Email
  }


AjouterClasse() {
  if (this.Classe.NomDeClasse.length==0){
    alert("Enter Le Nom De Matiere")
  }else if(this.Classe.image==""){
    alert("Enter Le Photo de Matiere")
  }else{
  let mat = new FormData()
  mat.append("Email",this.Classe.Email)
  mat.append("NomDeClasse",this.Classe.NomDeClasse)
  mat.append("image",this.Classe.image)

  this._service.ajouterClasse(mat,localStorage.getItem("token")).subscribe(()=>{
    alert("Matiere ajouter avec suceé")
  },(err)=>{
    alert("Matiere ajouter avec suceé")
  })
  window.location.reload()
  }
}

}
