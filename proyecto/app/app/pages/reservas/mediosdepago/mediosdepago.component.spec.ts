import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosdepagoComponent } from './mediosdepago.component';

describe('MediosdepagoComponent', () => {
  let component: MediosdepagoComponent;
  let fixture: ComponentFixture<MediosdepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediosdepagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediosdepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
