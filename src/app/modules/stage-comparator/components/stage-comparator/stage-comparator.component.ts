import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stage } from '../../../../shared/models/stage/stage.model';

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
    /**/
    // console.log('StageComparatorComponent::constructor()');
   }

  ngOnInit() {
    /**/
    // console.log('StageComparatorComponent::ngOnInit()');
    this.route.data
    .subscribe((data: { stages: Stage[] }) => {
      this.stages = data.stages;
      /**/
      // console.log(`stages: ${data.stages}`);
    });
  }

}
