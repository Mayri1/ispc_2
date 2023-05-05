import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuguemosComponent } from './juguemos.component';

describe('JuguemosComponent', () => {
  let component: JuguemosComponent;
  let fixture: ComponentFixture<JuguemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuguemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuguemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
