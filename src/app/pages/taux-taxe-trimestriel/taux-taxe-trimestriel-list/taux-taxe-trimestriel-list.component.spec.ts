import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxTaxeTrimestrielListComponent } from './taux-taxe-trimestriel-list.component';

describe('TauxTaxeTrimestrielListComponent', () => {
  let component: TauxTaxeTrimestrielListComponent;
  let fixture: ComponentFixture<TauxTaxeTrimestrielListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxTaxeTrimestrielListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxTaxeTrimestrielListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
