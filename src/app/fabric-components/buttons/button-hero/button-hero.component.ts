import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-hero',
  templateUrl: './button-hero.component.html',
  styleUrls: ['./button-hero.component.css']
})
export class ButtonHeroComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  iconClass = 'ms-Icon ms-Icon--Add';

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
