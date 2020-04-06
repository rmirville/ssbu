import { Component, Input, OnInit } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-text-table',
  templateUrl: './stage-comparator-text-table.component.html',
  styleUrls: ['./stage-comparator-text-table.component.css']
})
export class StageComparatorTextTableComponent implements OnInit {

  @Input() stageData: BinnedStageDimensionsSet;

  constructor() { }

  ngOnInit() {
  }

}
