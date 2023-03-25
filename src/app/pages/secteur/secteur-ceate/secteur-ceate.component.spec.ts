import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurCeateComponent } from './secteur-ceate.component';

describe('SecteurCeateComponent', () => {
  let component: SecteurCeateComponent;
  let fixture: ComponentFixture<SecteurCeateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecteurCeateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecteurCeateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
