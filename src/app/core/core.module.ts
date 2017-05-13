import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from 'app/app-routing.module';

import { NavbarComponent } from 'app/core/navbar/navbar.component';
import { FooterComponent } from 'app/core/root/footer/footer.component';
import { ContactComponent } from 'app/core/contact/contact.component';
import { RootComponent } from 'app/core/root/root.component';
import { HomeComponent } from 'app/core/root/home/home.component';
import { ResumeComponent } from 'app/core/root/resume/resume.component';
import { AboutComponent } from 'app/core/root/about/about.component';
import { DirectivesModule } from 'app/directives/directives.module';

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
