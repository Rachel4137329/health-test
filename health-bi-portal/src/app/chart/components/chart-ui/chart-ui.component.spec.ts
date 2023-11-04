import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUiComponent } from './chart-ui.component';

describe('ChartUiComponent', () => {
  let component: ChartUiComponent;
  let fixture: ComponentFixture<ChartUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartUiComponent]
    });
    fixture = TestBed.createComponent(ChartUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
