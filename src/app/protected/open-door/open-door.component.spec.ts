import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDoorComponent } from './open-door.component';

describe('OpenDoorComponent', () => {
  let component: OpenDoorComponent;
  let fixture: ComponentFixture<OpenDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
