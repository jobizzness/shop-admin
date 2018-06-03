import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProftChartComponent } from './proft-chart.component';

describe('ProftChartComponent', () => {
  let component: ProftChartComponent;
  let fixture: ComponentFixture<ProftChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProftChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProftChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
