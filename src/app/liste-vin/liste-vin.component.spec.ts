import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVinComponent } from './liste-vin.component';

describe('ListeVinComponent', () => {
  let component: ListeVinComponent;
  let fixture: ComponentFixture<ListeVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
