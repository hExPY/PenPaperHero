import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.css']
})
export class HeroViewComponent implements OnInit {
  public hero: any;


  constructor(
    private state: StateService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    });
  }

  getSanitizedUrl() {
    return this.sanitizer.bypassSecurityTrustUrl("data:" + this.hero.details.avatar.type + ";base64, " + this.hero.details.avatar.data);
  }

}
