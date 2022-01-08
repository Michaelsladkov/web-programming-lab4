import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingFormComponent } from './shooting-form.component';

describe('ShootingFormComponent', () => {
  let component: ShootingFormComponent;
  let fixture: ComponentFixture<ShootingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShootingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
