import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteRegionComponent } from './recette-region.component';

describe('RecetteRegionComponent', () => {
  let component: RecetteRegionComponent;
  let fixture: ComponentFixture<RecetteRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetteRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
