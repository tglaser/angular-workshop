import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello3',
  templateUrl: './hello3.component.html',
  styleUrls: ['./hello3.component.scss']
})
export class Hello3Component implements OnInit {

  nameEntered: boolean;
  name: string;

  constructor() {
  }

  ngOnInit() {
  }

  onNameSubmitted(newName: string) {
    this.name = newName;
    this.nameEntered = true;
  }

}
