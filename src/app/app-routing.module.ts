import { ProfilComponent } from './profil/profil.component';
import { KategoriComponent } from './pages/kategori/kategori.component';
import { LoginComponent } from './pages/login/login.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ProductComponent } from './pages/product/product.component';
import { ForsideComponent } from './pages/forside/forside.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'forside', pathMatch: 'full' },
  { path: 'forside', component: ForsideComponent, pathMatch: 'full' },
  { path: 'kategori', component: KategoriComponent, pathMatch: 'full' },
  { path: 'kontakt', component: KontaktComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductComponent, pathMatch: 'full' },
  { path: 'profil', component: ProfilComponent, canActivate: [  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
