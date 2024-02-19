import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes:Hero[] = [];
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
  }
  search(term:string){
    this.heroService.searchHeroes(term).subscribe(heroes => {
      this.heroes = heroes._embedded.heroes;
    });
  }
}
