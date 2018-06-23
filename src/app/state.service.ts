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
  public heroEmptyAttribute = {
    "name": "",
    "level": "",
    "modifier": ""
  };
  private baseHero = {
    attributes: {
      available_level: ["Dice 4", "Dice 6", "Dice 8", "Dice 10", "Dice 12"],
      attributes: []
    },
    details: {
      name: "",
      gender: "",
      concept: "",
      nationality: "",
      faction: "",
      loge: "",
      rank: "",
      experience: "",
      status: 1,
      avatar: {
        type: "image/png",
        data: 'iVBORw0KGgoAAAANSUhEUgAAATkAAAE5CAMAAADcP6fDAAAC/VBMVEVMaXHeqkD0xVbzxFj1xVb0xVT0xVb0xVX0x1vzuDnxtSnYnibnqSnlqi/orCzyv0fwsiDqryP5ujawkUZQbWxnbVb1thuMgkwETI4ES4osWXzirSYET5CbjEmTiGuHg1koYYEDUpMFUpIMUIsTToYPVIIxYnegilXOpTXkqCbusCnjqC74tSjhrjgEVJYQWITJnDPnqijaoCnalyXKwrdUdIYIQnoRTHzzqh9jdmsGPHcQT4HVu4LQlyPTlyDdoSjipiufoJ3IwbfKwrhhd4oIQnoeU3fuqCEISoEMS34GPHcDOXYzZInGlCgHQH7NlCrQlynfpS/CvLSVmJ+ElZpwfHx5dEx7iIixsbGmp6jKkivgpS0/ZHANSH25uLiDkZKJkZX4rR7mpCG/kkCfoKADWJscSnn/sBmqkmSno52spJiYmJlSa32Mjo6Ji5CRk5CUlpyPkZalnpSBjY8rb6Dr1JyBiovq6uuinZRib3lXjbhtm7/a2tobY5zM0NSnpaONr8rDw8OhmpCdnp8OWaExU22sgzecmZIGRIF8gIMKRHYOTYgNVZZSZWx+f4CVlpGFiYmAgYJ5eny7gSPCiCXIjyTBjSmKdkHbnycIRYUXWo/rlhi9iCkNUoHQlysJSYuGh4jGjiDPkh3djxzOjyEKTZODhIUPVYMKT5YLUZoQWIQKH0EBCjEACzYHLlYABykBCCsNVpwLQGwOVIMMVaC8hSuLhXzboS3GjioPVYO7hSgADDwWQHCZbCJOTk6ObS2kcyRlW0csNDxeUTt9aD2rdyWseCbAiSjGjSSCXSMdFRwfFx46JRu/hiVGKh2wfCa2gicNWaYcFR4bFR6YeDTUmyySjIN5fHtLLR/Xni24fipPMCLBiyfRliENV6TKjxlyb2pYWVl8d28OXazGihS9ghDXnCTAhRK6firApWlKSkoKTpGclozJhiwHQHxSU1PPii+PlJEGQX1VVVUHVpvUjDD/0gdWRjr3nBOBiogOW6mtbQeJWAvaly+BjY/73v89AAAA/3RSTlMAEj9p//5xsOPe/zpv//////7////////////////////////8//8J/6bG////////5WVUo5Wlp///pZz/////2Cz7/////////////////8KZaP/////////////////z///////9///U////////////////////I///////n///////////////N/////8+//84Kdv//////////////6z//3n//////9P//////////9P/l////7v////////////////o/////////////////////8L///v88d+q////////////////Xf//of//XK7/sf//YP97k////3sYUWZrAAAZbklEQVR4AezWhZbiQBCF4Y3LSASHZtzt/R9vu1JIrRecSdKTvV/zAOE/N/INAAAAAAAAAAAAAEDH8zU8h65HXlWfgjBS8N26HhYGPZdT6LScGsqh3B+hHMp5Qhw59oaI9GJP6CRcku5lucZJZ+VOz8h5rpGle0kX6bw03CtKharzcqVGEe6lXZeLBlIuSrE5bA6b+9835ydCxGvLrXo0/qtJ1WO5ajL+q1GdW02/KEqEz/yIikMhCkleWtPZvLH4vfly1WO51XIu8AVJs2lp5Zv/JMQtlWNRzeXMH8oxp8qR35fjbu2XY/lAytUhO6IcNtdZOVZPyXr+dcutp6STzUVF46JxOSPjufDFyo1n5JL/TtGIWipX8AVdXRMz3zD2OF3uj/3M3tWqJEXb5W4ss+1GDB2U05ajWlwN5Y4ox+fW/ubG+XILZ8rdbn5MWQ6bY+IxN0c5RTnGyxOn4f5XiWE9l5MPOjoop98cJZPfJiinK0dubbHd8rA5/XPOMreOP+cW7pXjuW2WR+f27n7r7uHYco/eLw4v93B7t3PrVDlm7OHBscsn4ez8zDq83HP2sxdPX47znT0Jl7KZE+UYv1i533pa7p2R18PLvbyRmhXvRVFkynJCuTddu1pu3nK598GW48+523bKUbjBliO22s/lqs/ZXDHgzQkt3K3kiHKVc+U+iMh3/Z2du/BOK+nDOF5931Xq7u6xtnHDIkDcIO7uQrItG9e1+v+78/xuNjPAECZIuDT3M+npker3PFeqqVcEaSYuPeM1BP+kj78RvM3ksp6R9Gz4ycT8lJYDF7NIZi6X9yZYvuCViXt6S3BXN+WuFxRyRb9yxU+OyZktVs5m50p+fQnZpUCvNKYLZaSc2B17nC6LdV+vxP1d5s491k25uxUFXEzKlYrlyrmIy5nOchGXM8oZ5YxyldxuuWxSagK/cg4ndz0ZyyEdEctV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'
      }
    }
  };
  private heroSource = new BehaviorSubject(Object.assign({}, this.baseHero));
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

  resetHero(){
    this.localStorage.clear().subscribe(() => { });
    this.changeHero(this.baseHero);
  }

  changeHero(hero) {
    console.log("changeHero called...");
    this.heroSource.next(hero);
    this.saveHeroToStorage();
  }
}
