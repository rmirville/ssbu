import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StageSelectInfo } from '../../stage/models/stage-select-info.model';

@Component({
  selector: 'ssbu-stage-select',
  templateUrl: './stage-select.component.html',
  styleUrls: ['./stage-select.component.css']
})
export class StageSelectComponent implements OnInit {
  stageGroup: FormGroup = this.fb.group({});
  @Input() stages: StageSelectInfo[];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() { }

}
