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
});
