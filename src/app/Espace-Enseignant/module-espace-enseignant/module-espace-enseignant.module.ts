import { CommonModule } from '@angular/common';
import { ModuleEspaceEnseignantRoutingModule } from './module-espace-enseignant-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MainEnseignantComponent } from '../main-enseignant/main-enseignant.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProfileComponent,
    MainEnseignantComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ModuleEspaceEnseignantRoutingModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ModuleEspaceEnseignantModule { }
