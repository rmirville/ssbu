import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComparatorTextTableComponent } from './stage-comparator-text-table.component';

describe('StageComparatorTextTableComponent', () => {
  let component: StageComparatorTextTableComponent;
  let fixture: ComponentFixture<StageComparatorTextTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageComparatorTextTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComparatorTextTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
