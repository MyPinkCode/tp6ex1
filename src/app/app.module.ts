import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ErrorComponent } from './application/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AccueilComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
