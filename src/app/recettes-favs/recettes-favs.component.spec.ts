import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesFavsComponent } from './recettes-favs.component';

describe('RecettesFavsComponent', () => {
  let component: RecettesFavsComponent;
  let fixture: ComponentFixture<RecettesFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettesFavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
