import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComparatorNumberTableComponent } from './stage-comparator-number-table.component';

describe('NumberTableComponent', () => {
  let component: StageComparatorNumberTableComponent;
  let fixture: ComponentFixture<StageComparatorNumberTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageComparatorNumberTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComparatorNumberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
