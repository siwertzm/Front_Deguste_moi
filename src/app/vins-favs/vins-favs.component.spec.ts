import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinsFavsComponent } from './vins-favs.component';

describe('VinsFavsComponent', () => {
  let component: VinsFavsComponent;
  let fixture: ComponentFixture<VinsFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinsFavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinsFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
