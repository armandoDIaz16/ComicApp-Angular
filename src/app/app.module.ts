import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTES
import { APP_ROUTING } from './app.routes';


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

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    SingleHeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
