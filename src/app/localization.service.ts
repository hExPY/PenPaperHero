import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  public appTranslation = {
    "en": {
      navbar: {
        create: "Create",
        view: "View",
        export: "Export",
        import: "Import",
        reset: "Reset"
      }
    },
    "de": {
      navbar: {
        create: "Anlegen",
        view: "Ansehen",
        export: "Exportieren",
        import: "Importieren",
        reset: "Zurücksetzen"
      }
    }
  }
  public currentLanguage = "en";
  constructor() { }

  getCurrentLanguageSet() {
    return this.appTranslation[this.currentLanguage];
  }

  setLanguageSet(lang){
    this.currentLanguage = lang;
  }

  getCurrentLanguageCode(){
    return this.currentLanguage;
  }
}
