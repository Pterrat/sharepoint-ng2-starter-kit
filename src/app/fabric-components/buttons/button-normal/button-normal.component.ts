import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button-normal',
  templateUrl: './button-normal.component.html',
  styleUrls: ['./button-normal.component.css']
})
export class ButtonNormalComponent implements OnInit {

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
