import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private route : Router){

  }

  ngOnInit(): void {

  }

//_______________________________________________________________________________________

public User : {
  Email : { type : String },
  Mot_De_Pass :{ type : String },
  checkbox :{ type : any}
}

Connexion(){
  this.route.navigate(["/Enseignant"]);
}

}
