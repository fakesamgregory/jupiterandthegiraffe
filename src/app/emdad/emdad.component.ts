import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormatDataService } from '../format-data.service';

@Component({
  selector: 'app-emdad',
  templateUrl: '../work.template.html'
})
export class EmdadComponent implements OnInit {
   data: any;

  constructor(
    private http: HttpClient,
    private dataService: FormatDataService
  ) { }

  ngOnInit() {
    this.http
      .get('/assets/json/friends.json')
      .map((value) => this.dataService.formatNFilterData(value['friends'], 'emdadrashid(3dux)')[0].data)
      .subscribe(value => this.data = value);
  }
}
