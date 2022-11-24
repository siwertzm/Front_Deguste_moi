import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesVinsComponent } from './mes-vins.component';

describe('MesVinsComponent', () => {
  let component: MesVinsComponent;
  let fixture: ComponentFixture<MesVinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesVinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesVinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
