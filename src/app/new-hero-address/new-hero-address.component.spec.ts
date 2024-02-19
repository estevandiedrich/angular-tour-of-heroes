import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeroAddressComponent } from './new-hero-address.component';

describe('NewHeroAddressComponent', () => {
  let component: NewHeroAddressComponent;
  let fixture: ComponentFixture<NewHeroAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHeroAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHeroAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
