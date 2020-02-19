import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Importaciones para validar y trabajar formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ROUTES
import { APP_ROUTING } from './app.routes';
//Ng prime 
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {InputSwitchModule} from 'primeng/inputswitch';
import {AutoCompleteModule} from 'primeng/autocomplete';

// SERVICIOS
import { HeroesService } from './services/heroes.service';

// FONTAWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// COMPONENTS
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SingleHeroeComponent } from './components/single-heroe/single-heroe.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    SingleHeroeComponent,
    BuscarHeroesComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    FontAwesomeModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    AutoCompleteModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
