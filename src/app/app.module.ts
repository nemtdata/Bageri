
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForsideComponent } from './pages/forside/forside.component';
import { KategoriComponent } from './pages/kategori/kategori.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { FooterComponent } from './partiels/footer/footer.component';
import { NavComponent } from './partiels/nav/nav.component';
import { ControlMessageComponent } from './pages/kontakt/control-message.component';
import { SliderComponent } from './partiels/slider/slider.component';
import { CookieService } from 'ngx-cookie-service';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    KategoriComponent,
    LoginComponent,
    ProductComponent,
    KontaktComponent,
    FooterComponent,
    NavComponent,
    ControlMessageComponent,
    SliderComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
