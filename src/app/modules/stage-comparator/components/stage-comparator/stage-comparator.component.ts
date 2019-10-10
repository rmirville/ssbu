import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stage } from '../../../../shared/stage/models/stage.model';

@Component({
  selector: 'ssbu-stage-comparator',
  templateUrl: './stage-comparator.component.html',
  styleUrls: ['./stage-comparator.component.css']
})
export class StageComparatorComponent implements OnInit {

  stages: Stage[];

  constructor(
    private route: ActivatedRoute
  ) {
   }

  ngOnInit() {
    /**/
    // console.log('StageComparatorComponent::ngOnInit()');
    this.route.data.subscribe((data: { stages: Stage[] }) => {
      /**/
      // console.log(`  * data: ${JSON.stringify(data)}`);
      // console.log(`  * data.stages: ${JSON.stringify(data.stages)}`);
      // console.log(`  * data.stages type: ${typeof data.stages}`);
      this.stages = [...data.stages];
      /**/
      // console.log(`  * this.stages: ${JSON.stringify(this.stages)}`);
    });
  }

}
