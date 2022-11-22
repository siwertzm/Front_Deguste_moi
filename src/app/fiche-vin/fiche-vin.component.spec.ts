import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheVinComponent } from './fiche-vin.component';

describe('FicheVinComponent', () => {
  let component: FicheVinComponent;
  let fixture: ComponentFixture<FicheVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheVinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
