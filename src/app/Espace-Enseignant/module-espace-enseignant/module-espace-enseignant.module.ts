import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleEspaceEnseignantRoutingModule } from './module-espace-enseignant-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnseignantComponent } from '../enseignant/enseignant.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    EnseignantComponent
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ModuleEspaceEnseignantRoutingModule,
    HttpClientModule
  ]
})
export class ModuleEspaceEnseignantModule { }
