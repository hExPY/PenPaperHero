import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroViewComponent } from './hero-view.component';

describe('HeroViewComponent', () => {
  let component: HeroViewComponent;
  let fixture: ComponentFixture<HeroViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
