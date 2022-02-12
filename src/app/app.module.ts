import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Breadcumb1Component } from './pages/breadcumb1/breadcumb1.component';
import { Breadcumb2Component } from './pages/breadcumb2/breadcumb2.component';
import { DescriptionsComponent } from './pages/descriptions/descriptions.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Breadcumb1Component,
    Breadcumb2Component,
    DescriptionsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
