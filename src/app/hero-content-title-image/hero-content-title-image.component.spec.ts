import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContentTitleImageComponent } from './hero-content-title-image.component';

describe('HeroContentTitleImageComponent', () => {
  let component: HeroContentTitleImageComponent;
  let fixture: ComponentFixture<HeroContentTitleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroContentTitleImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroContentTitleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
