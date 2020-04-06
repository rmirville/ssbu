import { Component, Input, OnInit } from '@angular/core';

import { BinnedStageDimensionsSet } from '../../../../shared/stage/models/binned-stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator-graph',
  templateUrl: './stage-comparator-graph.component.html',
  styleUrls: ['./stage-comparator-graph.component.css']
})
export class StageComparatorGraphComponent implements OnInit {

  @Input() stageData: BinnedStageDimensionsSet;

  constructor() { }

  ngOnInit() {
  }

}
