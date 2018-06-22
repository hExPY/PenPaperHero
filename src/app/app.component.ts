import { Component, OnInit } from '@angular/core';
// import { ClipboardService } from 'ngx-clipboard';
import { NotificationsService } from 'angular2-notifications';
import { StateService } from "./state.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateService]
})
export class AppComponent implements OnInit {
  public isNavbarCollapsed = true;
  public hero: any;

  constructor(
    private state: StateService,
    private router: Router,
    private notificationsService: NotificationsService
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

  resetHeroToDefault() {
    this.state.resetHero();
    this.isNavbarCollapsed = true;
    this.notificationsService.success("Hero reset", "successfully", {
      timeOut: 3000,
      maxStack: 2,
      preventDuplicates: true,
    });
  }

  onFormChange(){
    this.state.changeHero(this.hero);
  }

}
