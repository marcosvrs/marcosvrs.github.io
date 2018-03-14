import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/root/home/home.component';
import { ResumeComponent } from './core/root/resume/resume.component';
import { AboutComponent } from './core/root/about/about.component';
import { RootComponent } from './core/root/root.component';
import { ContactComponent } from './core/contact/contact.component';

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
    }],
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
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
