import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RueCreateComponent } from './rue-create.component';

describe('RueCreateComponent', () => {
  let component: RueCreateComponent;
  let fixture: ComponentFixture<RueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RueCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
