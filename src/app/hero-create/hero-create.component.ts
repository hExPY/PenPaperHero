import { Component, OnInit } from '@angular/core';
import { StateService } from "../state.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  public hero: any;
  // public heroStateFormGroup: FormGroup;
  public model: any;

  constructor(
    private state: StateService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.state.currentHero.subscribe(hero => {
      this.hero = hero
    });
    // this.heroStateFormGroup = this.formBuilder.group({
    //   model: "undef"
    // });
  }

  onHeroStateFormGroupChange(){
    // this.hero.details.state = this.heroStateFormGroup.value.model;
    this.onFormChange();
  }

  onFormChange() {
    this.state.changeHero(this.hero);
  }

}
