import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { ClipboardService } from 'ngx-clipboard';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-hero-export',
  templateUrl: './hero-export.component.html',
  styleUrls: ['./hero-export.component.css']
})
export class HeroExportComponent implements OnInit {
  hero: {};

  constructor(
    private state: StateService,
    private clipboardService: ClipboardService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    })
  }
  exportHeroToClipboard() {
    this.clipboardService.copyFromContent(JSON.stringify(this.hero));
    this.notificationsService.success("Copied Hero",  "to Clipboard", {
      timeOut: 3000,
      maxStack: 2,
      preventDuplicates: true,
      icons: "alert"
    })
    // this.toastr.success('Hello world!', 'Toastr fun!');

  }

}
