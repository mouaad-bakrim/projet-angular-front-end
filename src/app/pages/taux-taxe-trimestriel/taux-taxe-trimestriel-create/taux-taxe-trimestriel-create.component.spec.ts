import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxTaxeTrimestrielCreateComponent } from './taux-taxe-trimestriel-create.component';

describe('TauxTaxeTrimestrielCreateComponent', () => {
  let component: TauxTaxeTrimestrielCreateComponent;
  let fixture: ComponentFixture<TauxTaxeTrimestrielCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxTaxeTrimestrielCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxTaxeTrimestrielCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
