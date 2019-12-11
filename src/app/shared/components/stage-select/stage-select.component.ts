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
  series: StageSelectSection = {
    id: 'series',
    title: 'By Series',
    attribute: 'by-series',
    show: false,
    expand: false,
    sections: []
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    /**/
    // console.log('StageSelectComponent::ngOnInit()');

    let legalCommonStages: StageSelectInfo[] = [];
    let legalUncommonStages: StageSelectInfo[] = [];
    let legalRareStages: StageSelectInfo[] = [];
    let seriesStages: { [seriesName: string]: StageSelectInfo[] } = {};
    
    for (const stage of this.stages) {
      /**/
      // console.log(`  * checking stage: ${stage.name} (${stage.series})`);
      
      // group stages by series
      if (!(stage.series in seriesStages)) {
        seriesStages[stage.series] = [];
      }
      /**/
      // console.log(`  * seriesStages so far: ${JSON.stringify(Object.keys(seriesStages))}`);
      seriesStages[stage.series].push(stage);

      /**/
      // console.log(`  * seriesStages[${stage.series}]: ${JSON.stringify(seriesStages[stage.series])}`);

      switch (stage.tourneyPresence) {
        case 0:
          legalCommonStages.push(stage);
          break;
        case 1:
          legalUncommonStages.push(stage);
          break;
        case 2:
          legalRareStages.push(stage);
          break;
      }
    }

    // create section for each series
    for (const stageList in seriesStages) {
      const title: string = stageList;
      const attribute: string = stageList.replace(/ /g, '-').replace(/[^a-zA-Z\-]/g, '').toLowerCase();
      const id: string = attribute.replace(/\-/g, '');
      this.series.sections.push({
        id: id,
        title: title,
        attribute: attribute,
        show: true,
        expand: false
      });
      this.classifiedStages.series[id] = [...seriesStages[stageList]];
    }
    /**/
    // console.log(`  * classified.series: ${JSON.stringify(this.classifiedStages.series)}`);

    this.classifiedStages.tourneyPresence.legalCommon = [...legalCommonStages];
    this.classifiedStages.tourneyPresence.legalUncommon = [...legalUncommonStages];
    this.classifiedStages.tourneyPresence.legalRare = [...legalRareStages];

    /**/
    // console.log(`* classifiedStages.legalCommon: ${JSON.stringify(this.classifiedStages.tourneyPresence.legalCommon)}`);
    this.series.show = (this.stages.length > 0);
    this.tourneyPresence.sections[0].show = (this.classifiedStages.tourneyPresence.legalCommon.length > 0);
    this.tourneyPresence.sections[1].show = (this.classifiedStages.tourneyPresence.legalUncommon.length > 0);
    this.tourneyPresence.sections[2].show = (this.classifiedStages.tourneyPresence.legalRare.length > 0);
    this.tourneyPresence.show = (this.tourneyPresence.sections[0].show || this.tourneyPresence.sections[1].show || this.tourneyPresence.sections[2].show);
  }

}
