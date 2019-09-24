import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HeroesService,Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  iconSearch = faSearch;
   arrayHeroes: Heroe[];

  constructor(private _heroesService: HeroesService,
              private _router: Router ) { }

  ngOnInit() {
  }

  public buscarHeroe(termino: string) {
     this._router.navigate(['buscarHeroes', termino]);
     // this.arrayHeroes = this._heroesService.buscarHeroes(termino);
     // console.log(this.arrayHeroes)
  }

}
