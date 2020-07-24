import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { compareText } from '../../../utility/compare-functions';

import { StageClassifications } from '../../models/stage-classifications.model';

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

const BLANK_SERIES: string = 'Miscellaneous';

@Component({
  selector: 'ssbu-stage-select',
  templateUrl: './stage-select.component.html',
  styleUrls: ['./stage-select.component.css']
})
export class StageSelectComponent implements OnChanges, OnInit {
  selectionForm: FormGroup = this.fb.group({}, { validators: this._checkboxSelected() });
  separator: string = '_';

  @Input() stages: StageClassifications[];
  @Input() parentEvent$: Observable<string>;
  @Output() submitSelection = new EventEmitter<string[]>();

  errorActive: boolean = false;

  parentError: { active: boolean, message: string } = {
    active: false,
    message: ""
  };

  errors: { [type: string]: {active: boolean, message: string} } = {
    noStages: {
      active: false,
      message: "Stages could not be loaded. Try refreshing the page."
    }
  };

  classifiedStages: {
    tourneyPresence: {
      legalCommon: StageClassifications[],
      legalUncommon: StageClassifications[],
      legalRare: StageClassifications[]
    },
    series: {
      [seriesName: string]: StageClassifications[]
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

    this.parentEvent$.subscribe({
      next: (event: string) => {
        switch (event) {
          case 'fatalError':
            this.parentError.active = true;
            this.parentError.message = "Something went wrong. Try refreshing the page.";
            this._updateErrorActive();
            break;
        }
      }
    });

    let legalCommonStages: StageClassifications[] = [];
    let legalUncommonStages: StageClassifications[] = [];
    let legalRareStages: StageClassifications[] = [];
    let seriesStages: { [seriesName: string]: StageClassifications[] } = {};
    
    if (this.stages.length === 0) {
      this.errors.noStages.active = true;
      this._updateErrorActive();
    }
    else {
      for (let stage of this.stages) {
        ///
        // console.log(`  * checking stage: ${stage.name} (${stage.series})`);
        if (!(stage.series) || stage.series.trim().length === 0) {
          stage.series = BLANK_SERIES;
        }
        // group stages by series
        if (!(stage.series in seriesStages)) {
          seriesStages[stage.series] = [];
        }
        ///
        // console.log(`  * seriesStages so far: ${JSON.stringify(Object.keys(seriesStages))}`);
        seriesStages[stage.series].push(stage);

        ///
        // console.log(`  * seriesStages[${stage.series}]: ${JSON.stringify(seriesStages[stage.series])}`);
        let isCommonlyLegal: boolean = false;

        switch (stage.tourneyPresence) {
          case 0:
            isCommonlyLegal = true;
            legalCommonStages.push(stage);
            break;
          case 1:
            legalUncommonStages.push(stage);
            break;
          case 2:
            legalRareStages.push(stage);
            break;
        }
        this.selectionForm.addControl(stage.gameName, this.fb.control(isCommonlyLegal));
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
      ///
      // console.log(`  * classified.series: ${JSON.stringify(this.classifiedStages.series)}`);

      // create and sort tournament presence section
      this.classifiedStages.tourneyPresence.legalCommon = [...legalCommonStages.sort(this._compareInfo.bind(this))];
      this.classifiedStages.tourneyPresence.legalUncommon = [...legalUncommonStages.sort(this._compareInfo.bind(this))];
      this.classifiedStages.tourneyPresence.legalRare = [...legalRareStages.sort(this._compareInfo.bind(this))];

      ///
      // console.log(`* classifiedStages.legalCommon: ${JSON.stringify(this.classifiedStages.tourneyPresence.legalCommon)}`);
      this.series.show = (this.stages.length > 0);
      this.tourneyPresence.sections[0].show = (this.classifiedStages.tourneyPresence.legalCommon.length > 0);
      this.tourneyPresence.sections[1].show = (this.classifiedStages.tourneyPresence.legalUncommon.length > 0);
      this.tourneyPresence.sections[2].show = (this.classifiedStages.tourneyPresence.legalRare.length > 0);
      this.tourneyPresence.show = (this.tourneyPresence.sections[0].show || this.tourneyPresence.sections[1].show || this.tourneyPresence.sections[2].show);

      this.rootSections.push(this.tourneyPresence);
      this.rootSections.push(this.series);

      this._updateErrorActive();
      this.submitSelected();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.stages) {
      this._updateErrorActive();
    }
  }

  submitSelected() {
    ///
    // console.group('StageSelectComponent::submitSelected()');
    // console.log(`selectionForm.value: ${JSON.stringify(this.selectionForm.value)}`);
    let stageSelection: string[] = [];
    for (const stageName in this.selectionForm.value) {
      ///
      // console.group(`selectionForm.value[${stageName}]:`);
      if (this.selectionForm.value[stageName] === true) {
        ///
        // console.log(`${stageName} added`);
        stageSelection.push(stageName);
      }
      ///
      // console.groupEnd();
    }
    ///
    // console.log(`stageSelection: ${JSON.stringify(stageSelection)}`);
    this.submitSelection.emit(stageSelection);
    ///
    // console.groupEnd();
  }

  updateAll(section: string, value: boolean) {
    ///
    // console.groupCollapsed('StageSelectComponent::updateAll()');
    // data validation
    if (typeof section !== 'string') {
      throw new TypeError('section was not of type string');
    }

    if (typeof value !== 'boolean') {
      throw new TypeError('value was not of type boolean');
    }
    let affectedStages: StageClassifications[] = this.stages;

    if (section === 'tourneyPresence') {
      affectedStages = this.stages.filter(stage => { return (stage.tourneyPresence >= 0); });
    }

    for (const stage of affectedStages) {
      this.selectionForm.get(stage.gameName).patchValue(value);
    }
    this._updateErrorActive();
    ///
    // console.groupEnd();
  }

  _updateErrorActive() {
    ///
    // console.group('StageSelectComponent::_updateErrorActive()');
    // console.log(`form invalid? ${!this.selectionForm.valid}`);
    // console.log(`parent error active? ${this.parentError.active}`);
    // console.log(`component error active? ${Object.values(this.errors).map(error => error.active).includes(true)}`);
    this.errorActive = (
      (!this.selectionForm.valid)
      || this.parentError.active
      || Object.values(this.errors).map(error => error.active).includes(true)
    );
    ///
    // console.groupEnd();
  }

  _compareSection(a: StageSelectSection, b: StageSelectSection): number {
    return compareText(a.title, b.title);
  }

  _compareInfo(a: StageClassifications, b: StageClassifications): number {
    return compareText(a.name, b.name);
  }

  _checkboxSelected(): ValidatorFn {
    const validator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
      ///
      // console.group('StageSelectComponent::checkboxSelected()');
      // console.log(`control.value: ${JSON.stringify(control.value)}`);
      let selected = Object.values(control.value).includes(true);
      ///
      // console.log(`selected: ${selected}`);
      // console.groupEnd();

      return selected ? null : { 'required': true };
    };
    return validator;
  }

}
