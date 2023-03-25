import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationLocalCreateComponent } from './notification-local-create.component';

describe('NotificationLocalCreateComponent', () => {
  let component: NotificationLocalCreateComponent;
  let fixture: ComponentFixture<NotificationLocalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationLocalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationLocalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
