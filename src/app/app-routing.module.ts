import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path: "", component: HeroComponent
},{
  path: "about", component: AboutComponent
},{
  path: "work", component: WorkComponent
},{
  path: "service", component: ServiceComponent
},{
  path: "contact", component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
