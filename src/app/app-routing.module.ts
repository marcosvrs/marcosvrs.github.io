import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from 'app/core/root/home/home.component';
import { ResumeComponent } from 'app/core/root/resume/resume.component';
import { AboutComponent } from 'app/core/root/about/about.component';
import { RootComponent } from 'app/core/root/root.component';
import { ContactComponent } from 'app/core/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [{
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
    { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsModule' }],
    component: RootComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/?error=404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }