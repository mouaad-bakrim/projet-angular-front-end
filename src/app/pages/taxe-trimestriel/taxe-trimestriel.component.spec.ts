import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeTrimestrielComponent } from './taxe-trimestriel.component';

describe('TaxeTrimestrielComponent', () => {
  let component: TaxeTrimestrielComponent;
  let fixture: ComponentFixture<TaxeTrimestrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeTrimestrielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeTrimestrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
