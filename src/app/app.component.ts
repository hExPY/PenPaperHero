import { Component, OnInit } from '@angular/core';
// import { ClipboardService } from 'ngx-clipboard';
// import { NotificationsService } from 'angular2-notifications';
import { StateService } from "./state.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateService]
})
export class AppComponent implements OnInit {
  isNavbarCollapsed = true;
  public hero: any;

  constructor(
    private state: StateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.state.loadHeroFromStorage();
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    })
    this.router.events.subscribe(() => {
      this.isNavbarCollapsed = true;
    });
  }

  onFormChange(){
    this.state.changeHero(this.hero);
  }

}
