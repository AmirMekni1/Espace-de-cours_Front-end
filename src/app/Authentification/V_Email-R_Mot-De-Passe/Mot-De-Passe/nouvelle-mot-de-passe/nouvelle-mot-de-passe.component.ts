import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-nouvelle-mot-de-passe',
  templateUrl: './nouvelle-mot-de-passe.component.html',
  styleUrls: ['./nouvelle-mot-de-passe.component.scss']
})
export class NouvelleMotDePasseComponent implements OnInit {

  pwd : ""
  id :""
  constructor(private _service : ServiceAuthentificationService,private getid : ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.getid.params.subscribe((e)=>{
      this.id=e.id
    })
  }
  
  ResetPassword(){
    const Mot_De_Pass = new FormData()
    Mot_De_Pass.append("Mot_De_Pass",this.pwd)
    
    this._service.NoveauMotDePassET(this.id,this.pwd).subscribe(()=>{
      console.log("okET ",this.id)
    },()=>{
      this._service.NoveauMotDePassEN(this.id,this.pwd).subscribe(()=>{
        console.log("okEN ",this.id)
      },(err)=>{
        console.log(err)
      })
    })
  }
}
