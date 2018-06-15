import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private clipboardService: ClipboardService,
    private toastr: ToastrService
  ) { }
  // Variables
  public hero = {
    details: {
      name: "",
      gender: "",
      concept: "",
      nationality: "",
      fraction: "",
      loge: "",
      rank: "",
      experience: "",
      state: ""
    }
  };
  public localStorageFieldName = "pnp_hero";

  // Functions
  // ----> Save/Load
  heroSaveToStorage() {
    try {
      localStorage.setItem(this.localStorageFieldName, JSON.stringify(this.hero));
      console.log("Saved Hero to Storage");
    } catch(err) {
      console.log("Saving didnt worked", err);
    }
  }

  heroLoadFromStorage() {
    const tmpHero = JSON.parse(localStorage.getItem(this.localStorageFieldName));
    if (tmpHero === null) {
      console.log("heroLoadFromStorage - no Storage Entry found. Creating default empty Hero.")
      localStorage.setItem(this.localStorageFieldName, JSON.stringify(this.hero));
    } else {
      console.log("heroLoadFromStorage - Storage Entry found. Loading Hero into app.")
      this.hero = JSON.parse(localStorage.getItem(this.localStorageFieldName));
    }
  }

  // ----> Getter/Setter
  heroGetHeroFromStorage() {
    return localStorage.getItem(this.localStorageFieldName)
  }

  // ----> Copy/Pasta
  heroExportFromStorageToClipboard() {
    this.clipboardService.copyFromContent(this.heroGetHeroFromStorage());
    this.toastr.success('Hello world!', 'Toastr fun!');

  }

  ngOnInit() {
    this.heroLoadFromStorage();
    // setInterval(() => {
    //   this.heroSaveToStorage();
    // }, 2000)
  }
}
