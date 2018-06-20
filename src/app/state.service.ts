import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(
    protected localStorage: LocalStorage
  ) { }
  private heroSource = new BehaviorSubject({
    details: {
      name: "",
      gender: "",
      concept: "",
      nationality: "",
      faction: "",
      loge: "",
      rank: "",
      experience: "",
      status: ""
    }
  });
  currentHero = this.heroSource.asObservable();
  localStorageFieldName = "PnP-Hero"

  saveHeroToStorage() {
    const globalCurrentHero = this.getCurrentHero();
    try {
      this.localStorage.setItem(this.localStorageFieldName, globalCurrentHero).subscribe(() => { });
      console.log("Saved", globalCurrentHero, "to Storage");
    } catch (err) {
      console.log("Saving didnt worked", err);
    }
  }

  getCurrentHero(){
    return this.heroSource.getValue()
  }

  loadHeroFromStorage() {
    this.localStorage.getItem(this.localStorageFieldName).subscribe((hero) => {
      if (hero) {
        console.log("loadHeroFromStorage - Storage Entry found. Loading Hero into app.");
        this.changeHero(hero);
      } else {
        console.log("loadHeroFromStorage - Storage Entry not found. creating empty one");
        this.saveHeroToStorage();
      }
    });
  }

  changeHero(hero) {
    console.log("changeHero called...");
    this.heroSource.next(hero);
    this.saveHeroToStorage();
  }
}
