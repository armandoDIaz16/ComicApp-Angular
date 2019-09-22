import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {faArrowAltCircleLeft  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-single-heroe',
  templateUrl: './single-heroe.component.html',
  styleUrls: ['./single-heroe.component.css']
})
export class SingleHeroeComponent implements OnInit {

  heroe: Heroe;
  iconFlecha = faArrowAltCircleLeft;

  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              // tslint:disable-next-line:variable-name
              private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }



}
