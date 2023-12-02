import { Component } from '@angular/core';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';
  constructor(private _service : ServiceAuthentificationService){
    
  }
  user(){
    this._service.IsUser()
  }
  
}
