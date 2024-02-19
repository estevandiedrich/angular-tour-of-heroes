import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
  heroes:Hero[] = [];
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
  }
  add(name: string,power?:string) {
    name = name.trim();
    power = power?.trim();
    if (!name) { return; }
    this.heroService.addHero({ name,power } as Hero)
      .subscribe(hero => {
        this.heroes!.push(hero);
      });
  }

}
