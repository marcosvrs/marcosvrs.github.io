import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './root/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './root/home/home.component';
import { ResumeComponent } from './root/resume/resume.component';
import { AboutComponent } from './root/about/about.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    DirectivesModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    RootComponent,
    HomeComponent,
    ResumeComponent,
    AboutComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
