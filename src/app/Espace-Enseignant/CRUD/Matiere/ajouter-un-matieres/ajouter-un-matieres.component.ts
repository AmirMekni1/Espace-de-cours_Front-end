import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';
export interface ModalData {
  name: string;
  color: string;
}

@Component({
  selector: 'app-ajouter-un-matieres',
  templateUrl: './ajouter-un-matieres.component.html',
  styleUrls: ['./ajouter-un-matieres.component.scss']
})
export class AjouterUnMatieresComponent {



  Matiere = {
    Email : "",
    NomMatiere : "",
    image : ""

  }
Getphoto($event: any) {
this.Matiere.image = $event.target.files[0];
}

  constructor(
    private route : Router,
    private _service : ServiceEspaceEnseignantService,
    public dialogRef: MatDialogRef<AjouterUnMatieresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
   let data = this._service.GetDataProfile()
   this.Matiere.Email = data.Email
  }


AjouterMetiere() {
  let mat = new FormData()
  mat.append("Email",this.Matiere.Email)
  mat.append("NomMatier",this.Matiere.NomMatiere)
  mat.append("image",this.Matiere.image)

  this._service.ajouterMatiere(mat).subscribe(()=>{
    alert("Matiere ajouter avec suceé")
    this.route.navigateByUrl("http://localhost:4200/Enseignant/Matiere")
  },(err)=>{
    alert("Matiere ajouter avec suceé")
    this.route.navigateByUrl("http://localhost:4200/Enseignant/Matiere")
  })
  
  }

}