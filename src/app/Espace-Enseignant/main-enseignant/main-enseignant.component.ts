import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-main-enseignant',
  templateUrl: './main-enseignant.component.html',
  styleUrls: ['./main-enseignant.component.scss']
})
export class MainEnseignantComponent {
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
