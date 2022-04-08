import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConversionComponent } from './temperature-conversion.component';

describe('TemperatureConversionComponent', () => {
  let component: TemperatureConversionComponent;
  let fixture: ComponentFixture<TemperatureConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
