import { Component, OnInit, assertPlatform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  pwd : ""
  id :""
  constructor(private _service : ServiceAuthentificationService,private getid : ActivatedRoute,private route : Router){
    
  }
  ngOnInit(): void {
    this.getid.params.subscribe((e)=>{
      this.id=e.id
    })
    
  }
  
  NouvelleMotDePass(){
   this._service.NoveauMotDePassET(this.id,this.pwd).subscribe(()=>{
      alert("Le Mot De Passe Est Changer Avec Sucees")
      this.route.navigate(['/'])
    },()=>{
      this._service.NoveauMotDePassEN(this.id,this.pwd).subscribe(()=>{
        alert("Le Mot De Passe Est Changer Avec Sucees")
        this.route.navigate(['/'])
      },(err)=>{
        alert(err)
      })
    })
  }
}
