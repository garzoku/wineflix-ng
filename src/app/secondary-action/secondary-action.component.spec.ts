import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryActionComponent } from './secondary-action.component';

describe('SecondaryActionComponent', () => {
  let component: SecondaryActionComponent;
  let fixture: ComponentFixture<SecondaryActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
