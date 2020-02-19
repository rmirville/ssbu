import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComparatorGraphComponent } from './stage-comparator-graph.component';

describe('StageComparatorGraphComponent', () => {
  let component: StageComparatorGraphComponent;
  let fixture: ComponentFixture<StageComparatorGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageComparatorGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComparatorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a column of stages\' names', () => {
    
  });
  it('should show a column of stages\' blastzone widths');
  it('should show a column of stages\' stage lengths');
  it('should show a column of stages\' off-stage distances');
  it('should show a column of stages\' ceiling heights');
  it('should sort stages by blastzone width descending');
  it('should secondarily sort stages alphabetically');
});
