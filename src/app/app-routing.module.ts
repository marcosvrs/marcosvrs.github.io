import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ResumeComponent } from './views/resume/resume.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: '**',
    redirectTo: '/?error=404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
