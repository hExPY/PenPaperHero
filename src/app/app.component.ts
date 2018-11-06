import { Component, OnInit } from '@angular/core';
// import { ClipboardService } from 'ngx-clipboard';
import { NotificationsService } from 'angular2-notifications';
import { StateService } from "./state.service";
import { LocalizationService } from "./localization.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateService, LocalizationService]
})
export class AppComponent implements OnInit {
  public isNavbarCollapsed = true;
  public hero: any;
  public currentLanguage = this.localization.getCurrentLanguageCode();

  constructor(
    private state: StateService,
    private router: Router,
    private notificationsService: NotificationsService,
    private localization: LocalizationService,
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
    location.reload();
  }

  onFormChange(){
    this.state.changeHero(this.hero);
  }

  switchLanguage(lang){
    this.localization.setLanguageSet(lang);
    this.currentLanguage = lang;
  }
}
