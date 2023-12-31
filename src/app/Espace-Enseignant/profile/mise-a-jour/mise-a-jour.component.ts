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
  selector: 'app-mise-a-jour',
  templateUrl: './mise-a-jour.component.html',
  styleUrls: ['./mise-a-jour.component.scss']
})
export class MiseAJourComponent {

  Information = {
    id         : "",
    NomPrenom  : "",
    Email      : "",
    Telephone :  "",
    image      : "",
    SiteWeb    : "",
    GitHub     : "",    
    Twitter    : "",    
    Instagram  : "",  
    Facebook   : ""
  }

  MS = []


  constructor(
    private route : Router,
    private _service : ServiceEspaceEnseignantService,
    public dialogRef: MatDialogRef<MiseAJourComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
   let data = this._service.GetDataProfile()
   this.Information.id = data.id
   this.Information.NomPrenom = data.NomPrenom
   this.Information.Telephone = data.Telephone  
   this.Information.image     = data.image  
   this.Information.SiteWeb   = data.SiteWeb  
   this.Information.GitHub    = data.GitHub   
   this.Information.Twitter   = data.Twitter  
   this.Information.Instagram = data.Instagram
   this.Information.Facebook  = data.Facebook 
   this._service.GetAllMediasSociaux(data.id,localStorage.getItem("token")).subscribe((data)=>{
    this.MS = data
    this.Information.SiteWeb   = this.MS[0] 
   this.Information.GitHub    = this.MS[1]  
   this.Information.Twitter   = this.MS[2] 
   this.Information.Instagram = this.MS[3]
   this.Information.Facebook  = this.MS[4]
   })
  
  }
  Getphoto($event: any) {

    this.Information.image = $event.target.files[0];
   
    }
  
MiseAjour() {
  let Donnees = new FormData()
  Donnees.append("id",this.Information.id)
  Donnees.append("NomPrenom",this.Information.NomPrenom)
  Donnees.append("Telephone",this.Information.Telephone)
  Donnees.append("image",this.Information.image )
  Donnees.append("SiteWeb",this.Information.SiteWeb)
  Donnees.append("GitHub",this.Information.GitHub)
  Donnees.append("Twitter",this.Information.Twitter)
  Donnees.append("Instagram",this.Information.Instagram)
  Donnees.append("Facebook",this.Information.Facebook )
 this._service.MiseAjour(Donnees,localStorage.getItem("token")).subscribe((d) => {
   alert(" Mise à jour réussie");
   location.reload()
},
(err) => {
  alert("Erreur lors de la mise à jour");
}
);
}
}