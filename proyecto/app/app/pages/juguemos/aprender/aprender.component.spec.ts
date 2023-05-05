import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderComponent } from './aprender.component';

describe('AprenderComponent', () => {
  let component: AprenderComponent;
  let fixture: ComponentFixture<AprenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
