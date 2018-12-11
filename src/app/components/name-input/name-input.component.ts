import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {

  @Output()
  submittedValue: EventEmitter<string> = new EventEmitter();

  @Input()
  value: string;

  constructor() {
  }

  ngOnInit() {
  }

  onKey(newValue: string) {
    this.value = newValue;
  }

  onEnter() {
    this.submittedValue.emit(this.value);
  }
}
