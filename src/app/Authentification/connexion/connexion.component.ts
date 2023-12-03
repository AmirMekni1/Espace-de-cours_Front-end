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
        localStorage.setItem("token",this.token.MyToken)
        this.route.navigate(["/Etudiant"]);
      },
      (err) => {
        this._service.connexionEn(this.User).subscribe(
          (res) => {
            this.token = res
            localStorage.setItem("token",this.token.MyToken)
            this.route.navigate(["/Enseignant"]);
          },(err) => {
            alert("Email or Password Incorrect !")
          }
        )
        
      })
  }

}
