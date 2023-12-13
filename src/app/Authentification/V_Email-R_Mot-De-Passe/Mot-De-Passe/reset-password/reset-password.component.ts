import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  Email: ""

  constructor(private _service: ServiceAuthentificationService,private route:Router) {

  }
  ngOnInit(): void {
    if (this._service.IsUser()==true){
      this.route.navigate(["/**"])
     }
  }
  isuser(){
    return this._service.IsUser()
   }

  MotDePasseOublier() {
    this._service.MotdePassoublieET(this.Email).subscribe(() => {
     alert("Nous Envoyons Un Email Du Recuperation De Mot De Passe")
     this.route.navigate(['/'])
    }, () => {
      this._service.MotDePassOublieEN(this.Email).subscribe(() => {
        alert("Nous Envoyons Un Email Du Recuperation De Mot De Passe")
        this.route.navigate(['/'])
      },(err)=>{
        alert(err)
      })
    })
  }











}

