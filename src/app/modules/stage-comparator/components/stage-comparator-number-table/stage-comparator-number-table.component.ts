import { Component, OnInit } from '@angular/core';

import { StageDimensionsSet } from '../../../../shared/stage/models/stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-number-table',
  templateUrl: './stage-comparator-number-table.component.html',
  styleUrls: ['./stage-comparator-number-table.component.css']
})
export class StageComparatorNumberTableComponent implements OnInit {

  public dimensions: StageDimensionsSet;

  constructor() { }

  ngOnInit() {
  }

}
