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

const BLANK_SERIES: string = 'Miscellaneous';

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
    
    for (let stage of this.stages) {
      /**/
      // console.log(`  * checking stage: ${stage.name} (${stage.series})`);
      if ( !(stage.series) || stage.series.trim().length === 0 ) {
        stage.series = BLANK_SERIES;
      }
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

    // create and sort series section
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
      this.classifiedStages.series[id] = [...seriesStages[stageList].sort(this._compareInfo.bind(this))];
    }
    
    this.series.sections.sort(this._compareSection.bind(this));

    // put miscellaneous section last
    const miscSectionIndex: number = this.series.sections.findIndex(section => section.title === BLANK_SERIES);
    if (miscSectionIndex !== -1) {
      this.series.sections.push(this.series.sections.splice(miscSectionIndex, 1)[0]);
    }
    /**/
    // console.log(`  * classified.series: ${JSON.stringify(this.classifiedStages.series)}`);

    // create and sort tournament presence section
    this.classifiedStages.tourneyPresence.legalCommon = [...legalCommonStages.sort(this._compareInfo.bind(this))];
    this.classifiedStages.tourneyPresence.legalUncommon = [...legalUncommonStages.sort(this._compareInfo.bind(this))];
    this.classifiedStages.tourneyPresence.legalRare = [...legalRareStages.sort(this._compareInfo.bind(this))];

    /**/
    // console.log(`* classifiedStages.legalCommon: ${JSON.stringify(this.classifiedStages.tourneyPresence.legalCommon)}`);
    this.series.show = (this.stages.length > 0);
    this.tourneyPresence.sections[0].show = (this.classifiedStages.tourneyPresence.legalCommon.length > 0);
    this.tourneyPresence.sections[1].show = (this.classifiedStages.tourneyPresence.legalUncommon.length > 0);
    this.tourneyPresence.sections[2].show = (this.classifiedStages.tourneyPresence.legalRare.length > 0);
    this.tourneyPresence.show = (this.tourneyPresence.sections[0].show || this.tourneyPresence.sections[1].show || this.tourneyPresence.sections[2].show);
  }

  _compareText(a: string, b: string): number {
    const aString = a.toLowerCase();
    const bString = b.toLowerCase();
    if (aString > bString) { return 1; }
    if (aString < bString) { return -1; }
    return 0;
  }

  _compareSection(a: StageSelectSection, b: StageSelectSection): number {
    return this._compareText(a.title, b.title);
  }

  _compareInfo(a: StageSelectInfo, b: StageSelectInfo): number {
    return this._compareText(a.name, b.name);
  }
}
