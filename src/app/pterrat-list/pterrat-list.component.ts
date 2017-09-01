import pnp from 'sp-pnp-js';
import { Component, OnInit } from '@angular/core';
declare var fabric: any;
@Component({
  selector: 'app-pterrat-list',
  templateUrl: './pterrat-list.component.html',
  styleUrls: ['./pterrat-list.component.css']
})
export class PterratListComponent implements OnInit {

  constructor() { }
  loading: string;
  result: any;
  ngOnInit() {
    pnp.sp.web.lists.getByTitle('pterratList1').items.get().then((result: any) => {
      console.log(result);
      this.result = result;
      this.loading = 'done';
  }).catch((e) => { this.loading = 'error'; });
  }

}

interface IPterratEntity {
  Id: number;
  Title: string;
}
