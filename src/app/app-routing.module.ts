import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './application/produits/produits.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ErrorComponent } from './application/error/error.component';

const routes: Routes = [{path:'accueil',component:AccueilComponent},
                        {path:'produits',component:ProduitsComponent},
                        {path:'contact',component:ContactComponent},
                        {path:'',redirectTo:'accueil',pathMatch:'full'},
                        {path:'**',component:ErrorComponent}  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
