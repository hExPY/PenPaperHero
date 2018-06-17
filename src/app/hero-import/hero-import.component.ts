import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-import',
  templateUrl: './hero-import.component.html',
  styleUrls: ['./hero-import.component.css']
})
export class HeroImportComponent implements OnInit {
  hero: {};
  public importHeroField: "";

  constructor(
    private state: StateService,
    private notificationsService: NotificationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    })
  }
  importHeroToStorage() {
    let importedHero;
    try {
      importedHero = JSON.parse(this.importHeroField)
    } catch (err){
      this.notificationsService.error("Import Error", "JSON invalid", {
        timeOut: 3000,
        maxStack: 2,
        preventDuplicates: true,
      })

    }
    if (importedHero) {
      this.notificationsService.success("Import Success", "Hero loaded", {
        timeOut: 3000,
        maxStack: 2,
        preventDuplicates: true,
      });
      this.state.changeHero(importedHero);
      this.importHeroField = "";
      this.router.navigate(["create"]);
    }
  }
}
