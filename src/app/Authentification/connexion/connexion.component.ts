import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../Service/service-authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private _service: ServiceAuthentificationService, private route: Router) {

  }

  ngOnInit(): void {
    if(this._service.IsUser()==true){
      this.route.navigate(["/**"])

    }

  }

  isUser(){
    return this._service.IsUser()
  }
  //_______________________________________________________________________________________

  token: any

  public User = {
    Email: "",
    Mot_De_Pass: ""
  }

  Connexion() {

    this._service.connexionEt(this.User).subscribe(
      (res) => {
        this.token = res
        localStorage.setItem("token", this.token.MyToken)
        this.route.navigate(["/Etudiant"]);
        this._service.envoyerToken("verifier").subscribe((d)=>{
          console.log("verifier")
      })
      }, () => {
        this._service.connexionEn(this.User).subscribe(
          (res) => {
            this.token = res
            localStorage.setItem("token", this.token.MyToken)
            this.route.navigate(["/Enseignant"]);
            this._service.envoyerToken("verifier").subscribe((d)=>{
              console.log("verifier")
          })
          }, () => {
            alert("Email or Password Incorrect !")
          })})
          
  }
}
