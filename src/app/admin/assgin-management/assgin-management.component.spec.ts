import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginManagementComponent } from './assgin-management.component';

describe('AssginManagementComponent', () => {
  let component: AssginManagementComponent;
  let fixture: ComponentFixture<AssginManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssginManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssginManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
