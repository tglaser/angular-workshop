import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {Hello2Component} from './hello2.component';

describe('Hello2Component', () => {
  let component: Hello2Component;
  let fixture: ComponentFixture<Hello2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Hello2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hello2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('don\'t show greeting initially', () => {
    const paragraph = fixture.debugElement.query(By.css('p'));

    expect(paragraph).toBeFalsy();
  });

  it('show greeting after button click', () => {
    component.sayHello();

    fixture.detectChanges();

    const paragraph = fixture.debugElement.query(By.css('p'));
    expect(paragraph).toBeTruthy();
    expect((<HTMLElement>paragraph.nativeElement).innerText).toEqual('Hello World!');
    expect(component.buttonClicked).toBeTruthy();
  });
});
