import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContentDescriptionComponent } from './hero-content-description.component';

describe('HeroContentDescriptionComponent', () => {
  let component: HeroContentDescriptionComponent;
  let fixture: ComponentFixture<HeroContentDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroContentDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroContentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
