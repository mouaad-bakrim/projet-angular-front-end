import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeAnuelleComponent } from './taxe-anuelle.component';

describe('TaxeAnuelleComponent', () => {
  let component: TaxeAnuelleComponent;
  let fixture: ComponentFixture<TaxeAnuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeAnuelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeAnuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
