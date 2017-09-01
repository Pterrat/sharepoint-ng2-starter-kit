import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sp-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {


  @Input()
  title: string;

  @Output()
  onClick: EventEmitter<void> = new EventEmitter<void>();
  // tslint:disable-next-line:one-line
  clickButton(){
    this.onClick.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
