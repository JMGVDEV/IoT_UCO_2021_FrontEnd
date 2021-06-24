import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDoorUserComponent } from './open-door-user.component';

describe('OpenDoorUserComponent', () => {
  let component: OpenDoorUserComponent;
  let fixture: ComponentFixture<OpenDoorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDoorUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDoorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
