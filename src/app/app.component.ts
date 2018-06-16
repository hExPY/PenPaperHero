import { Component, OnInit } from '@angular/core';
// import { ClipboardService } from 'ngx-clipboard';
// import { NotificationsService } from 'angular2-notifications';
import { StateService } from "./state.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateService]
})
export class AppComponent implements OnInit {

  hero: {};

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.loadHeroFromStorage();
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    })
  }

  onFormChange(){
    this.state.changeHero(this.hero);
  }

}
