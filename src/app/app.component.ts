import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // tslint:disable-next-line:one-line
  goTo(hash: string){
    location.hash = hash;
  }
}




