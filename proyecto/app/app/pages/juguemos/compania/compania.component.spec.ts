import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniaComponent } from './compania.component';

describe('CompaniaComponent', () => {
  let component: CompaniaComponent;
  let fixture: ComponentFixture<CompaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
