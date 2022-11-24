import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaRepasComponent } from './orga-repas.component';

describe('OrgaRepasComponent', () => {
  let component: OrgaRepasComponent;
  let fixture: ComponentFixture<OrgaRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgaRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgaRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
