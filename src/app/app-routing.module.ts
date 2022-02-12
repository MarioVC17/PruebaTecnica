import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Breadcumb1Component } from '../app/pages/breadcumb1/breadcumb1.component';
import { Breadcumb2Component } from '../app/pages/breadcumb2/breadcumb2.component';
import { DescriptionsComponent } from '../app/pages/descriptions/descriptions.component';

const routes: Routes = [
  { path: 'breadcumb1', component:Breadcumb1Component} ,
  { path: 'breadcumb2' , component:Breadcumb2Component},
  { path: 'description' , component:DescriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
