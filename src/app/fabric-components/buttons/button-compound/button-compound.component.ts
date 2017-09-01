import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-compound',
  templateUrl: './button-compound.component.html',
  styleUrls: ['./button-compound.component.css']
})
export class ButtonCompoundComponent implements OnInit {


  @Input()
  title: string;
  @Input()
  description: string;

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
