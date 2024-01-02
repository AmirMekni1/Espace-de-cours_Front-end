import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';
import { ServiceEspaceEnseignantService } from '../Service/service-espace-enseignant.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-enseignant',
  templateUrl: './main-enseignant.component.html',
  styleUrls: ['./main-enseignant.component.scss']
})
export class MainEnseignantComponent implements OnInit{

  theme: string;

constructor(private isUser : ServiceAuthentificationService,private route : Router,private _service : ServiceEspaceEnseignantService,private id : ActivatedRoute ){
  if( this.isUser.IsUser() == false)
  { this.route.navigate(['**']) }
 
    this._service.theme$.subscribe((theme) => (this.theme = theme));
}
  ngOnInit(): void {
    console.log(this.id.params)
  }

  

user(){
  return this.isUser.IsUser()
}

}


