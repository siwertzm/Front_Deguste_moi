import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAmiComponent } from './fiche-ami.component';

describe('FicheAmiComponent', () => {
  let component: FicheAmiComponent;
  let fixture: ComponentFixture<FicheAmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheAmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
