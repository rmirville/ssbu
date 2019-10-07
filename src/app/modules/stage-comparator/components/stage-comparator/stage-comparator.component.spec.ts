import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComparatorComponent } from './stage-comparator.component';

describe('StageComparatorComponent', () => {
  let component: StageComparatorComponent;
  let fixture: ComponentFixture<StageComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageComparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
