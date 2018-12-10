import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello2',
  templateUrl: './hello2.component.html',
  styleUrls: ['./hello2.component.scss']
})
export class Hello2Component implements OnInit {

  buttonClicked: boolean;


  constructor() {
  }

  ngOnInit() {
  }

  sayHello(): void {
    this.buttonClicked = true;
  }

}
