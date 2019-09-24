import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styleUrls: ['./buscar-heroes.component.css']
})
export class BuscarHeroesComponent implements OnInit {

  heroesArray: Heroe[] = [];
  parametroBusqueda: string;

  constructor(private _heroeService: HeroesService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.parametroBusqueda = params['termino'];
      this.heroesArray = this._heroeService.buscarHeroes(params['termino']);
       });
       console.log(this.heroesArray);
      }

}
