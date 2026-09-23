import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalLandscapes } from './natural-landscapes';

describe('NaturalLandscapes', () => {
  let component: NaturalLandscapes;
  let fixture: ComponentFixture<NaturalLandscapes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalLandscapes],
    }).compileComponents();

    fixture = TestBed.createComponent(NaturalLandscapes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
