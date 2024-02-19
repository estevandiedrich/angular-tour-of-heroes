import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../address'
;
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-new-hero-address',
  templateUrl: './new-hero-address.component.html',
  styleUrls: ['./new-hero-address.component.css']
})
export class NewHeroAddressComponent implements OnInit {

  constructor(private addressService:AddressService,private heroService:HeroService) { }
  selectedHero?:Hero = {id:0};
  heroes:Hero[] = [];
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes._embedded.heroes as Hero[];
    })
  }
  add(hero_id:string,address:string){
    this.addressService.addHeroAddress({id:0,address:address,hero: this.selectedHero } as Address).subscribe(address => console.info('address added'));
  }
  onSelect(value:any){

  }
}
