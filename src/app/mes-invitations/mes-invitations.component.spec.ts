import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesInvitationsComponent } from './mes-invitations.component';

describe('MesInvitationsComponent', () => {
  let component: MesInvitationsComponent;
  let fixture: ComponentFixture<MesInvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesInvitationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
