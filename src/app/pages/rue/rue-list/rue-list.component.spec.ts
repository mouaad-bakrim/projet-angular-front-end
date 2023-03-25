import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RueListComponent } from './rue-list.component';

describe('RueListComponent', () => {
  let component: RueListComponent;
  let fixture: ComponentFixture<RueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RueListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
