import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demoButton',
  templateUrl: './demoButton.component.html',
  styleUrls: ['./demoButton.component.css']
})
export class DemoButtonComponent implements OnInit {

  constructor() { }

// tslint:disable-next-line:one-line
log(text: string){
  console.log(text);
}

  ngOnInit() {
  }

}
