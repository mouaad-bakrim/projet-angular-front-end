import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeTrimestrielListComponent } from './taxe-trimestriel-list.component';

describe('TaxeTrimestrielListComponent', () => {
  let component: TaxeTrimestrielListComponent;
  let fixture: ComponentFixture<TaxeTrimestrielListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeTrimestrielListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeTrimestrielListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
