import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEspaceEtudiantService } from '../../service/service-espace-etudiant.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MiseAJourComponent, ModalData } from 'src/app/Espace-Enseignant/profile/mise-a-jour/mise-a-jour.component';

@Component({
  selector: 'app-mise-a-jour-profile',
  templateUrl: './mise-a-jour-profile.component.html',
  styleUrls: ['./mise-a-jour-profile.component.scss']
})
export class MiseAJourProfileComponent {

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
    private _service : ServiceEspaceEtudiantService,
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
    console.log(data)
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
  location.reload()
 this._service.MiseAjour(Donnees,localStorage.getItem("token")).subscribe((d) => {
   console.log(" Mise à jour réussie");
   
},
(err) => {
  alert("Erreur lors de la mise à jour");
}
);
}
}

export { MiseAJourComponent };
