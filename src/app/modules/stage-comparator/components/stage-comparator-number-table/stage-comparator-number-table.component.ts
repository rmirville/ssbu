import { Component, Input, OnInit } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-number-table',
  templateUrl: './stage-comparator-number-table.component.html',
  styleUrls: ['./stage-comparator-number-table.component.css']
})
export class StageComparatorNumberTableComponent implements OnInit {

  @Input() stageData: BinnedStageDimensionsSet;

  constructor() { }

  ngOnInit() {
  }

}
