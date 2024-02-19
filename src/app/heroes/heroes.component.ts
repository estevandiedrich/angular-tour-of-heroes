import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes?: Hero[];
  constructor(private heroService: HeroService, private messagesService: MessagesService) {
  }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes._embedded.heroes;
    })
  }
  onSelect(hero: Hero) {
    this.messagesService.add(`Selected Hero ${hero.name}`);
    this.selectedHero = hero;
  }
  delete(heroToDelete: Hero){
    this.heroService.delete(heroToDelete).subscribe(() => {
      this.heroes = this.heroes?.filter(h => h.id !== heroToDelete.id);
    });
  }
}
