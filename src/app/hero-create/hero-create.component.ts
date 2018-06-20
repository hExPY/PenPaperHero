import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  public hero: any;
  // public heroStateFormGroup: FormGroup;
  public model: any;
  public heroAvatarUpload: File;

  constructor(
    private state: StateService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    });

    // this.heroStateFormGroup = this.formBuilder.group({
    //   model: "undef"
    // });
  }

  onFileChanged(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.hero.details.avatar.type = file.type;
        this.hero.details.avatar.data = reader.result.split(',')[1];
        this.onFormChange();
      };
    }
  }

  onHeroStateFormGroupChange(){
    // this.hero.details.state = this.heroStateFormGroup.value.model;
    this.onFormChange();
  }

  public getSantizeUrl() {
    return this.sanitizer.bypassSecurityTrustUrl("data:" + this.hero.details.avatar.type + ";base64, " + this.hero.details.avatar.data);
  }

  onFormChange() {
    this.state.changeHero(this.hero);
  }

}
