import { Component, OnInit } from '@angular/core';
import { ServiceEspaceEtudiantService } from '../service/service-espace-etudiant.service';
import { MatDialog } from '@angular/material/dialog';
import { MiseAJourComponent, MiseAJourProfileComponent } from 'src/app/Espace-Etudiant/profile/mise-a-jour-profile/mise-a-jour-profile.component';
import { auto } from '@popperjs/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements  OnInit {

  profileEt = {
    _id: "",
    NomPrenom: "",
    image: "",
    Email :"",
    Role:"",
    MatiereET:"",
    Telephone : ""
  }
  MS=[]
  Array : any;
  constructor(private _service: ServiceEspaceEtudiantService,public dialog: MatDialog) {
    let data = this._service.GetDataProfile();
    this._service.DataEt(data.id,localStorage.getItem("token")).subscribe((d:any)=>{
      this.profileEt=d[0]
    },()=>{
    })
  }
  ngOnInit(): void {
    let data = this._service.GetDataProfile();
    this._service.RecupererMatiereEtudiant(data.id,localStorage.getItem('token')).subscribe((d)=>{
      this.Array = d as any;
    this._service.GetAllMediasSociaux(data.id,localStorage.getItem("token")).subscribe((d)=>{
      this.MS=d
    })
    })
    console.log( this.profileEt)
   
  }

  AjouterMatiereEnseignant(){
      this._service.AjouterMatiereEtudiant(this.profileEt.MatiereET,this.profileEt._id,localStorage.getItem("token")).subscribe(()=>{
        console.log("ok")
        location.reload()
      },(err)=>{

      })
  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MiseAJourProfileComponent, {
      width: '33%',
      height:auto,
    });
    dialogRef.afterClosed().subscribe((res) => {
      
    });
  }

  SupprimerMatiereEnseignant(Matiere:String){
    let verif =confirm("Vous Shouhaitez supprimer ce contenu")
    if (verif){
      this._service.SupprimerMatiereEtudiant(this.profileEt._id,Matiere,localStorage.getItem("token")).subscribe(()=>{
        alert("Supprimer Avec Succees")
        location.reload()
      })
    }
   
  }

}


