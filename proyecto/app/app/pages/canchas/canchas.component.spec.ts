import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasComponent } from './canchas.component';

describe('CanchasComponent', () => {
  let component: CanchasComponent;
  let fixture: ComponentFixture<CanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
