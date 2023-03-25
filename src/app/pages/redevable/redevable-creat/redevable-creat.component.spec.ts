import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevableCreatComponent } from './redevable-creat.component';

describe('RedevableCreatComponent', () => {
  let component: RedevableCreatComponent;
  let fixture: ComponentFixture<RedevableCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedevableCreatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedevableCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
