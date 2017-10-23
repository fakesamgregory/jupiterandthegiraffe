import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {
  public work;
  public error;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('stneouh');
    this.route.data
      .filter(name => {
        console.log(name, this.route.params);
        return this.route.params === name;
      })
      .subscribe(
        data => this.work = data.work,
        (error: Error) => this.error = error
      );
  }

}
