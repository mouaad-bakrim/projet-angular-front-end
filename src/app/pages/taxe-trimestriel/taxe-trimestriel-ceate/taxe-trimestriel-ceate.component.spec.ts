import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeTrimestrielCeateComponent } from './taxe-trimestriel-ceate.component';

describe('TaxeTrimestrielCeateComponent', () => {
  let component: TaxeTrimestrielCeateComponent;
  let fixture: ComponentFixture<TaxeTrimestrielCeateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeTrimestrielCeateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeTrimestrielCeateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
