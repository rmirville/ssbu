import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import { StageSelectInfo } from '../../stage/models/stage-select-info.model';

/**
 * Represents the UI configuration of a section of stages
 */
interface StageSelectSection {
  id: string;
  title: string;
  attribute: string;
  show: boolean;
  expand?: boolean;
  sections?: StageSelectSection[];
};

/**
 * Represents the selected status of a collection of stages
 * 
 * @interface StageSelectStatus
 */
interface StageSelectStatus {
  [gameName: string]: boolean;
};

const BLANK_SERIES: string = 'Miscellaneous';

@Component({
  selector: 'ssbu-stage-select',
  templateUrl: './stage-select.component.html',
  styleUrls: ['./stage-select.component.css']
})
export class StageSelectComponent implements OnInit {
  selectionForm: FormGroup = this.fb.group({}, {validators: this._checkboxSelected()});
  separator: string = '_';

  @Input() stages: StageSelectInfo[];
  @Output() submitSelection = new EventEmitter<string[]>();
  
  isSelected: StageSelectStatus = {};
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
  rootSections: StageSelectSection[] = [];
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
        attribute: 'tourney-legal-common',
        show: false
      },
      {
        id: 'legalUncommon',
        title: 'Uncommonly Legal',
        attribute: 'tourney-legal-uncommon',
        show: false
      },
      {
        id: 'legalRare',
        title: 'Rarely Legal',
        attribute: 'tourney-legal-rare',
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
      this.selectionForm.addControl( stage.gameName, this.fb.control(false) );
      this.isSelected[stage.gameName] = false;

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
      let hasTourneyPresence: boolean = false;

      switch (stage.tourneyPresence) {
        case 0:
          hasTourneyPresence = true;
          legalCommonStages.push(stage);
          break;
        case 1:
          hasTourneyPresence = true;
          legalUncommonStages.push(stage);
          break;
        case 2:
          hasTourneyPresence = true;
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

    this.rootSections.push(this.tourneyPresence);
    this.rootSections.push(this.series);
  }

  submitSelected() {
    /**/
    // console.group('StageSelectComponent::submitSelected()');
    // console.log(`selectionForm.value: ${JSON.stringify(this.selectionForm.value)}`);
    let stageSelection: string[] = [];
    for (const stageName in this.selectionForm.value) {
      /**/
      // console.group(`selectionForm.value[${stageName}]:`);
      if (this.selectionForm.value[stageName] === true) {
        /**/
        // console.log(`${stageName} added`);
        stageSelection.push(stageName);
      }
      /**/
      // console.groupEnd();
    }
    this.submitSelection.emit(stageSelection);
    /**/
    // console.groupEnd();
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

  _checkboxSelected(): ValidatorFn {
    const validator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
      /**/
      // console.group('StageSelectComponent::checkboxSelected()');
      // console.log(`control.value: ${JSON.stringify(control.value)}`);
      let selected = Object.values(control.value).includes(true);
      /**/
      // console.log(`selected: ${selected}`);
      // console.groupEnd();

      return selected ? null : { 'required': true };
    };
    return validator;
  }

}
