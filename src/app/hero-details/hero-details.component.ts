import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?:Hero;
  constructor(
    private activatedRoute:ActivatedRoute ,
    private location:Location,
    private heroService:HeroService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.heroService.getHeroWithAddresses(id).subscribe(hero => {
      this.hero = hero;
    })
  }
  goBack(){
    this.location.back();
  }
  save(){
    if(this.hero){
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
