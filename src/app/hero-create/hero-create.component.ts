import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser'
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  public hero: any;
  public heroStateFormGroup: FormGroup;
  public model: any;
  public heroAvatarUpload: File;

  constructor(
    private state: StateService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero;
    });

    this.heroStateFormGroup = this.formBuilder.group({
      model: this.hero.details.status
    });
  }
  ifClassIsActive(statusLevel){
    if (this.hero.details.status === statusLevel) {
      return {"active": true, "btn-success": true};
    } else {
      return { "active": false, "btn-success": false };
    }
  }
  onFileChanged(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (file.size > 50000 ) {
        this.notificationsService.error("Size Limit exceeded", "limited to 50kb", {
          timeOut: 3000,
          maxStack: 2,
          preventDuplicates: true,
          icons: "alert"
        })
      } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.hero.details.avatar.type = file.type;
          this.hero.details.avatar.data = String(reader.result).split(",")[1];
          this.onFormChange();
        };
      }
    }
  }

  onHeroStateFormGroupChange(){
    this.hero.details.status = this.heroStateFormGroup.value.model;
    this.onFormChange();
  }

  getSanitizedUrl() {
    return this.sanitizer.bypassSecurityTrustUrl("data:" + this.hero.details.avatar.type + ";base64, " + this.hero.details.avatar.data);
  }

  addNewAttribute() {
    this.hero.attributes.attributes.push(Object.assign({}, this.state.heroEmptyAttribute));
    this.onFormChange();
  }

  changeAttributeLevel(arrayPosition, diceLevel) {
    this.hero.attributes.attributes[arrayPosition].level = diceLevel;
    this.onFormChange();
  }

  removeAttribute(arrayPosition) {
    this.hero.attributes.attributes.splice(arrayPosition,1);
    this.onFormChange();
  }

  onFormChange() {
    this.state.changeHero(this.hero);
  }

}
