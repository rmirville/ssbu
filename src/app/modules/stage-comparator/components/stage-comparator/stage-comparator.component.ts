import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stage } from '../../../../shared/stage/models/stage.model';
import { StageDimensionsSet } from '../../../../shared/stage/models/stage-dimensions-set.model';

@Component({
  selector: 'ssbu-stage-comparator',
  templateUrl: './stage-comparator.component.html',
  styleUrls: ['./stage-comparator.component.css']
})
export class StageComparatorComponent implements OnInit {

  stages: Stage[];
  stageDimensionsSet: StageDimensionsSet;
  view: string;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    /**/
    // console.log('StageComparatorComponent::ngOnInit()');
    this.route.data.subscribe((data: { stageData: {stages: Stage[], dimensionsFull: StageDimensionsSet} }) => {
      /**/
      // console.log(`  * data: ${JSON.stringify(data)}`);
      // console.log(`  * data.stages: ${JSON.stringify(data.stageData)}`);
      // console.log(`  * data.stages type: ${typeof data.stages}`);
      this.stages = [...data.stageData.stages];
      this.stageDimensionsSet = data.stageData.dimensionsFull;
      /**/
      // console.log(`  * this.stages: ${JSON.stringify(this.stages)}`);
    });
    this.view = 'graph';
  }

  setView(view: string) {
    switch (view) {
      case 'text':
        this.view = 'text';
        break;
      case 'number':
        this.view = 'number';
        break;
      case 'graph':
        this.view = 'graph';
        break;
    }
  }

}
