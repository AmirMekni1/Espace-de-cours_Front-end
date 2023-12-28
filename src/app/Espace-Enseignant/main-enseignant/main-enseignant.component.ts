import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';
import { ServiceEspaceEnseignantService } from '../Service/service-espace-enseignant.service';

@Component({
  selector: 'app-main-enseignant',
  templateUrl: './main-enseignant.component.html',
  styleUrls: ['./main-enseignant.component.scss']
})
export class MainEnseignantComponent implements OnInit{
constructor(private isUser : ServiceAuthentificationService,private route : Router,private _service : ServiceEspaceEnseignantService,private id : ActivatedRoute){
  if( this.isUser.IsUser() == false)
  {
    this.route.navigate(['**'])
  }
 

}
  ngOnInit(): void {
    
    console.log(this.id.params)
  }
user(){
  return this.isUser.IsUser()
}
}
