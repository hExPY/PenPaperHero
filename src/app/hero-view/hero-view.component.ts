import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.css']
})
export class HeroViewComponent implements OnInit {
  public hero: any;


  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    });
  }

}
