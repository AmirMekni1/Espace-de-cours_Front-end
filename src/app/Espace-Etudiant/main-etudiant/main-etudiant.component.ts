import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-main-etudiant',
  templateUrl: './main-etudiant.component.html',
  styleUrls: ['./main-etudiant.component.scss']
})
export class MainEtudiantComponent {
  constructor(private isUser : ServiceAuthentificationService,private route : Router){
    if( this.isUser.IsUser() == false)
    {
      this.route.navigate(['**'])
    }
  }
  user(){
    return this.isUser.IsUser()
  }
  }
