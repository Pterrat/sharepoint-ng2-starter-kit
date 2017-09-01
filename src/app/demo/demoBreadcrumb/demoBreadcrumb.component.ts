import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demoBreadcrumb',
  templateUrl: './demoBreadcrumb.component.html',
  styleUrls: ['./demoBreadcrumb.component.css']
})
export class DemoBreadcrumbComponent implements OnInit {


  public listBreadCrumb: Array<BreadCrumbItem> = [
    {'name': 'Folder 1',
    'link': 'link1'},
    {'name': 'Folder 2',
    'link': 'link1'},
    {'name': 'Folder 3',
    'link': 'link1'},
    {'name': 'Folder 4',
    'link': 'link1'},
    {'name': 'Folder 5',
    'link': 'link1'},
    {'name': 'Folder 6',
    'link': 'link1'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

// tslint:disable-next-line:one-line
export class BreadCrumbItem{
  name: string;
  link: string;
}
