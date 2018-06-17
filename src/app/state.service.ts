import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() { }
  private heroSource = new BehaviorSubject({
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
  });
  currentHero = this.heroSource.asObservable();
  localStorageFieldName = "PnP-Hero"

  saveHeroToStorage() {
    const globalCurrentHero = this.getCurrentHero();
    try {
      localStorage.setItem(this.localStorageFieldName, JSON.stringify(globalCurrentHero));
      console.log("Saved", globalCurrentHero, "to Storage");
    } catch (err) {
      console.log("Saving didnt worked", err);
    }
  }

  getCurrentHero(){
    return this.heroSource.getValue()
  }

  loadHeroFromStorage() {
    try {
      const tmpHero = JSON.parse(localStorage.getItem(this.localStorageFieldName));
    } catch (err) {
      console.log("loadHeroFromStorage - Storage Entry not found. creating empty one")
      this.saveHeroToStorage();
    }
    if (tmpHero) {
      console.log("loadHeroFromStorage - Storage Entry found. Loading Hero into app.")
      this.changeHero(JSON.parse(localStorage.getItem(this.localStorageFieldName)));
    }
  }

  changeHero(hero) {
    console.log("changeHero called...");
    this.heroSource.next(hero);
    this.saveHeroToStorage();
  }

}
