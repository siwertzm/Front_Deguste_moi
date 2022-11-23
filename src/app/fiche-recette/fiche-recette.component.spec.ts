import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheRecetteComponent } from './fiche-recette.component';

describe('FicheRecetteComponent', () => {
  let component: FicheRecetteComponent;
  let fixture: ComponentFixture<FicheRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheRecetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
