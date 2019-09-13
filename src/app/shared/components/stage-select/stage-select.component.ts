import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ssbu-stage-select',
  templateUrl: './stage-select.component.html',
  styleUrls: ['./stage-select.component.css']
})
export class StageSelectComponent implements OnInit {
  stageGroup: FormGroup;
  stages: string[];

  constructor(fb: FormBuilder) {
    this.stageGroup = fb.group({});
  }

  ngOnInit() {
  }

}
