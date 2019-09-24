import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { SingleHeroeComponent } from './components/single-heroe/single-heroe.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'buscarHeroes/:termino', component: BuscarHeroesComponent },
    { path: 'singleHeroe/:id', component:  SingleHeroeComponent},
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
