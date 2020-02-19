import { Component, OnInit, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _heroesService: HeroesService) { }
estado :boolean;
heroes: Heroe[]  = [];
heroesArray: Heroe[] = [];
// @Output() event : EventEmitter;
heroe: string;
    
    buscarHeroes(event) {
      // console.log(event);
      this.heroesArray = this._heroesService.getHeroes();

      // this._heroesService.buscarHeroes(event.query).then(data => {
      //     this.heroes = data;
      // });
      
      this.heroes = this._heroesService.buscarHeroes(event.query);
      // console.log(event.query);
      console.log(this.heroesArray);
      console.log(this.heroe);
      // console.log(typeof(this.heroe));
    }
    refrescar(){
      console.log("mostrar key");
    }

  ngOnInit() {
    // this.buscarHeroes(null);
  }

}
