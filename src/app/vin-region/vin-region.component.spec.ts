import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinRegionComponent } from './vin-region.component';

describe('VinRegionComponent', () => {
  let component: VinRegionComponent;
  let fixture: ComponentFixture<VinRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
