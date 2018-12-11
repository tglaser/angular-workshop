import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockComponent} from 'ng-mocks';
import {NameInputComponent} from '../name-input/name-input.component';

import {Hello3Component} from './hello3.component';

describe('Hello3Component', () => {
  let component: Hello3Component;
  let fixture: ComponentFixture<Hello3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Hello3Component, MockComponent(NameInputComponent)]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
