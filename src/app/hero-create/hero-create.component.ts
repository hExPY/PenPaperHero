import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  hero: {};

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    })
  }

  onFormChange() {
    this.state.changeHero(this.hero);
  }

}
