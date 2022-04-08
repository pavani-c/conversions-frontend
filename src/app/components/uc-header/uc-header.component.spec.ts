import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcHeaderComponent } from './uc-header.component';

describe('TucHeaderComponent', () => {
  let component: UcHeaderComponent;
  let fixture: ComponentFixture<UcHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
