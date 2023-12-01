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
    let userA = new FormData();
    userA.append("Email", this.User.Email);
    userA.append("Mot_De_Pass", this.User.Mot_De_Pass);

    this._service.connexionEt(userA).subscribe(
      res => {
        this.token = res;
        localStorage.setItem("Mytoken", this.token.MyToken);
        this.route.navigate(["/Enseignant"]);
        console.log(this.token)
      },
      err => {
        alert("Email or password invalid")
        console.log(this.token)
        console.log(userA)
      })
  }

}
