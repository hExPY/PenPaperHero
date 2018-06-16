import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroExportComponent } from './hero-export.component';

describe('HeroExportComponent', () => {
  let component: HeroExportComponent;
  let fixture: ComponentFixture<HeroExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
