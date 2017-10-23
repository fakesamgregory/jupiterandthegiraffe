import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormatDataService } from '../format-data.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-velvettrumpet',
  templateUrl: '../work.template.html'
})
export class VelvettrumpetComponent implements OnInit {
   data: any;

  constructor(
     private http: HttpClient,
     private dataService: FormatDataService
  ) { }

  ngOnInit() {
    this.http
      .get('/assets/json/friends.json')
      .map((value) => this.dataService.formatNFilterData(value['friends'], 'velvettrumpet')[0].data)
      .subscribe(value => this.data = value);
  }

}
