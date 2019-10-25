import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { StageComparatorComponent } from './stage-comparator.component';

import { StageSelectMockComponent } from '../../../../shared/stage/components/mocks/stage-select.mock.component';
import { StageComparatorGraphMockComponent } from '../../../../shared/stage/components/mocks/stage-comparator-graph.mock.component';
import { StageComparatorTextTableMockComponent } from '../../../../shared/stage/components/mocks/stage-comparator-text-table.mock.component';
import { StageComparatorNumberTableMockComponent } from '../../../../shared/stage/components/mocks/stage-comparator-number-table.mock.component';

import { STAGES_ONE } from '../../../../shared/stage/models/mocks/stages';
import { DIMENSIONS_SET_ONE } from '../../../../shared/stage/models/mocks/stage-dimensions-set';

fdescribe('StageComparatorComponent', () => {
  let comparator: StageComparatorComponent;
  let fixture: ComponentFixture<StageComparatorComponent>;
  let fixtureMock: {
    select: ComponentFixture<StageSelectMockComponent>,
    graph: ComponentFixture<StageComparatorGraphMockComponent>,
    text: ComponentFixture<StageComparatorTextTableMockComponent>,
    number: ComponentFixture<StageComparatorNumberTableMockComponent>
  };
  let activatedRouteStub: Partial<ActivatedRoute>;
  let dElem: DebugElement;

  beforeEach(async(() => {
    activatedRouteStub = {
      data: Observable.create((observer) => {
        observer.next({stageData: {
          stages: STAGES_ONE,
          dimensionsFull: DIMENSIONS_SET_ONE
        }});
        observer.complete();
      })
    };
    TestBed.configureTestingModule({
      declarations: [
        StageComparatorComponent,
        StageSelectMockComponent,
        StageComparatorGraphMockComponent,
        StageComparatorTextTableMockComponent,
        StageComparatorNumberTableMockComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        }
      ],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComparatorComponent);
    fixtureMock = {
      select: TestBed.createComponent(StageSelectMockComponent),
      graph: TestBed.createComponent(StageComparatorGraphMockComponent),
      text: TestBed.createComponent(StageComparatorTextTableMockComponent),
      number: TestBed.createComponent(StageComparatorNumberTableMockComponent)
    };
    comparator = fixture.componentInstance;
    fixture.detectChanges();
    dElem = fixture.debugElement;
  });

  it('should create', () => {
    expect(comparator).toBeTruthy();
  });

  it('should have a view property set to graph on init', () => {
    expect(comparator.view).toEqual('graph');
  });

  it('should have a stages property set to the stages provided by the ActivatedRoute on init', () => {
    expect(comparator.stages).toEqual(STAGES_ONE);
  });

  it('should have a fullDimensionsSet property set to the DimensionsSet provided by the ActivatedRoute on init', () => {
    expect(comparator.stageDimensionsSet).toEqual(DIMENSIONS_SET_ONE);
  });

  describe('setView()', () => {

    it(`should change the view property to 'text' when given 'text'`, () => {
      comparator.setView('text');
      expect(comparator.view).toEqual('text');
    });

    it(`should change the view property to 'number' when given 'number'`, () => {
      comparator.setView('number');
      expect(comparator.view).toEqual('number');
    });

    it(`should change the view property to 'graph' when given 'graph'`, () => {
      comparator.setView('graph');
      expect(comparator.view).toEqual('graph');
    });

    it(`should change the view property to 'graph' when given 'graph', after view was another value`, () => {
      comparator.setView('number');
      comparator.setView('graph');
      expect(comparator.view).toEqual('graph');
    });

    it(`should not change the view property for string values that aren't 'graph', 'text' or 'number'`, () => {
      comparator.setView('food');
      expect(comparator.view).toEqual('graph');
    });

    it(`should not change the view property for blank string values`, () => {
      comparator.setView('');
      expect(comparator.view).toEqual('graph');
    });

  });

  describe('template', () => {
    beforeEach(() => {

    });

    it(`should show the stage select component`, () => {
      let expectedContent: string = fixtureMock.select.nativeElement.textContent;
      let selectDElem: DebugElement = dElem.query(By.css('ssbu-stage-select'));
      let actualContent: string = selectDElem.nativeElement.textContent;
      expect(actualContent).toEqual(expectedContent);
    });
    
    describe('default view', () => {

      it(`should show the graph component by default`, () => {
        let expectedContent: string = fixtureMock.graph.nativeElement.textContent;
        let graphDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-graph'));
        let actualContent: string = graphDElem.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it(`should not show the text table component by default`, () => {
        let textDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        expect(textDElem).toBeNull();
      });

      it(`should not show the number table component by default`, () => {
        let numDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        expect(numDElem).toBeNull();
      });

      it(`should have a graph button with the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

      it(`should have a text button without the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a numbers button without the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

    });

    describe('graph view', () => {

      beforeEach(() => {
        comparator.setView('text');
        comparator.setView('graph');
        fixture.detectChanges();
      });

      it(`should show the graph component`, () => {
        let graphDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-graph'));
        let expectedContent: string = graphDElem.nativeElement.textContent;
        let actualContent: string = fixtureMock.graph.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it(`should not show the text table component`, () => {
        let textDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        expect(textDElem).toBeNull();
      });

      it(`should not show the number table component`, () => {
        let numDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        expect(numDElem).toBeNull();
      });

      it(`should have a graph button with the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

      it(`should have a text button without the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a numbers button without the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

    });

    describe('text view', () => {

      beforeEach(() => {
        comparator.setView('text');
        fixture.detectChanges();
      });

      it('should not show the graph component', () => {
        let graphDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-graph'));
        expect(graphDElem).toBeNull();
      });

      it('should show the text table component', () => {
        let expectedContent: string = fixtureMock.text.nativeElement.textContent;
        let textDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        let actualContent: string = textDElem.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it('should not show the number component', () => {
        let numDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        expect(numDElem).toBeNull();
      });

      it(`should have a graph button without the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a text button with the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

      it(`should have a numbers button without the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

    });

    describe('number view', () => {

      beforeEach(() => {
        comparator.setView('number');
        fixture.detectChanges();
      });

      it('should not show the graph component', () => {
        let graphDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-graph'));
        expect(graphDElem).toBeNull();
      });

      it('should not show the text table component', () => {
        let textDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-text-table'));
        expect(textDElem).toBeNull();
      });

      it('should show the number table component', () => {
        let expectedContent: string = fixtureMock.number.nativeElement.textContent;
        let numDElem: DebugElement = dElem.query(By.css('ssbu-stage-comparator-number-table'));
        let actualContent: string = numDElem.nativeElement.textContent;
        expect(actualContent).toEqual(expectedContent);
      });

      it(`should have a graph button without the 'active' class`, () => {
        let graphNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(1) a'));
        expect(graphNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a text button without the 'active' class`, () => {
        let textNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(2) a'));
        expect(textNavDElem.nativeElement.classList.contains('active')).toBe(false);
      });

      it(`should have a numbers button with the 'active' class`, () => {
        let numNavDElem: DebugElement = dElem.query(By.css('.nav-pills li:nth-of-type(3) a'));
        expect(numNavDElem.nativeElement.classList.contains('active')).toBe(true);
      });

    });

  });

});
