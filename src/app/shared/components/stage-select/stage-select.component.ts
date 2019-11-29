import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StageSelectInfo } from '../../stage/models/stage-select-info.model';

interface StageSelectSection {
  id: string;
  title: string;
  attribute: string;
  show: boolean;
  expand?: boolean;
  sections?: StageSelectSection[];
};

@Component({
  selector: 'ssbu-stage-select',
  templateUrl: './stage-select.component.html',
  styleUrls: ['./stage-select.component.css']
})
export class StageSelectComponent implements OnInit {
  stageGroup: FormGroup = this.fb.group({});
  @Input() stages: StageSelectInfo[];
  classifiedStages: {
    tourneyPresence: {
      legalCommon: StageSelectInfo[],
      legalUncommon: StageSelectInfo[],
      legalRare: StageSelectInfo[]
    },
    series: {
      [seriesName: string]: StageSelectInfo[]
    }
  } = {
    tourneyPresence: {
      legalCommon: [],
      legalUncommon: [],
      legalRare: []
    },
    series: {}
  };
  tourneyPresence: StageSelectSection = {
    id: 'tourneyPresence',
    title: 'By Tournament Legality',
    attribute: 'by-tourney',
    show: false,
    expand: true,
    sections: [
      {
        id: 'legalCommon',
        title: 'Commonly Legal',
        attribute: 'legal-common',
        show: false
      },
      {
        id: 'legalUncommon',
        title: 'Uncommonly Legal',
        attribute: 'legal-uncommon',
        show: false
      },
      {
        id: 'legalRare',
        title: 'Rarely Legal',
        attribute: 'legal-rare',
        show: false
      }
    ]
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    /**/
    // console.log('StageSelectComponent::ngOnInit()');

    let legalCommonStages: StageSelectInfo[] = [];
    let legalUncommonStages: StageSelectInfo[] = [];
    let legalRareStages: StageSelectInfo[] = [];
    
    this.stages.forEach(stage => {
      /**/
      // console.log(`* checking stage ${stage.gameName}`);
      switch (stage.tourneyPresence) {
        case 0:
          /**/
          // console.log(`* stage ${stage.gameName} is legalCommon`);
          legalCommonStages.push(stage);
          break;
        case 1:
          legalUncommonStages.push(stage);
          break;
        case 2:
          legalRareStages.push(stage);
          break;
      }
    });

    this.classifiedStages.tourneyPresence.legalCommon = [...legalCommonStages];
    this.classifiedStages.tourneyPresence.legalUncommon = [...legalUncommonStages];
    this.classifiedStages.tourneyPresence.legalRare = [...legalRareStages];

    /**/
    // console.log(`* classifiedStages.legalCommon: ${JSON.stringify(this.classifiedStages.tourneyPresence.legalCommon)}`);
    this.tourneyPresence.sections[0].show = (this.classifiedStages.tourneyPresence.legalCommon.length > 0);
    this.tourneyPresence.sections[1].show = (this.classifiedStages.tourneyPresence.legalUncommon.length > 0);
    this.tourneyPresence.sections[2].show = (this.classifiedStages.tourneyPresence.legalRare.length > 0);
    this.tourneyPresence.show = (this.tourneyPresence.sections[0].show || this.tourneyPresence.sections[1].show || this.tourneyPresence.sections[2].show);
  }

}
