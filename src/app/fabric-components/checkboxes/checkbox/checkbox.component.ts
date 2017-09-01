import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const fabric: any;

@Component({
  selector: 'sp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements AfterViewInit {

  constructor() { }


    ngAfterViewInit() {
        let CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for (let i = 0; i < CheckBoxElements.length; i++) {
          // tslint:disable-next-line:no-unused-expression
          new fabric['CheckBox'](CheckBoxElements[i]);
        }
   }
  }

