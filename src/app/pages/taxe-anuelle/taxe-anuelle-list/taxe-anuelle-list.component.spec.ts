import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeAnuelleListComponent } from './taxe-anuelle-list.component';

describe('TaxeAnuelleListComponent', () => {
  let component: TaxeAnuelleListComponent;
  let fixture: ComponentFixture<TaxeAnuelleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeAnuelleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeAnuelleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
