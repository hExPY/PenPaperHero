import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImportComponent } from './hero-import.component';

describe('HeroImportComponent', () => {
  let component: HeroImportComponent;
  let fixture: ComponentFixture<HeroImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
