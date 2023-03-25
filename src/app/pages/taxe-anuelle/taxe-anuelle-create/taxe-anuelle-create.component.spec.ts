import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeAnuelleCreateComponent } from './taxe-anuelle-create.component';

describe('TaxeAnuelleCreateComponent', () => {
  let component: TaxeAnuelleCreateComponent;
  let fixture: ComponentFixture<TaxeAnuelleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeAnuelleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeAnuelleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
