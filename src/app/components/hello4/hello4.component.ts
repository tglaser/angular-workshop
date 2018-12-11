import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-hello4',
  templateUrl: './hello4.component.html',
  styleUrls: ['./hello4.component.scss']
})
export class Hello4Component implements OnInit {

  userName: string;
  formSubmitted: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
  }

}
