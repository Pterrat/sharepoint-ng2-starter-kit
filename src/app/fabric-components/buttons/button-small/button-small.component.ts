import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button-small',
  templateUrl: './button-small.component.html',
  styleUrls: ['./button-small.component.css']
})
export class ButtonSmallComponent implements OnInit {

  @Input()
  title: string;

  @Output()
  onClick: EventEmitter<void> = new EventEmitter<void>();
  // tslint:disable-next-line:one-line
  clickButton() {
    this.onClick.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
