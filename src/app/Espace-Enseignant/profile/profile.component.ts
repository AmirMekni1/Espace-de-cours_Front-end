import { Component, OnInit } from '@angular/core';
import { ServiceEspaceEnseignantService } from '../Service/service-espace-enseignant.service';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { MiseAJourComponent } from './mise-a-jour/mise-a-jour.component';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = {
    _id: "",
    NomPrenom: "",
    image: "",
    Email :"",
    Role:"",
    MatiereEns:"",
    Telephone : ""
  }
  MS=[]
  Array : any;
  constructor(private _service: ServiceEspaceEnseignantService,public dialog: MatDialog) {
    let data = this._service.GetDataProfile();
    this._service.DataEn(data.id,localStorage.getItem("token")).subscribe((d:any)=>{
      this.profile=d 
    },()=>{
    })
  }
  ngOnInit(): void {
    let data = this._service.GetDataProfile();
    this._service.RecupererMatiereEnseignant(data.id,localStorage.getItem('token')).subscribe((d)=>{
      this.Array = d as any;
    this._service.GetAllMediasSociaux(data.id,localStorage.getItem("token")).subscribe((d)=>{
      this.MS=d
    })
    })

   
  }

  AjouterMatiereEnseignant(){
      this._service.AjouterMatiereEnseignant(this.profile.MatiereEns,this.profile._id,localStorage.getItem("token")).subscribe(()=>{
        console.log("ok")
        location.reload()
      },(err)=>{

      })
  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MiseAJourComponent, {
      width: '33%',
      height:auto,
    });
    dialogRef.afterClosed().subscribe((res) => {
      
    });
  }

  SupprimerMatiereEnseignant(Matiere:String){
    let verif =confirm("Vous Shouhaitez supprimer ce contenu")
    if (verif){
      this._service.SupprimerMatiereEnseignant(this.profile._id,Matiere,localStorage.getItem("token")).subscribe(()=>{
        alert("Supprimer Avec Succees")
        location.reload()
      })
    }
   
  }

}
