import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/internal/operators';

@Component({
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {
  public work;
  public error;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(filter(name => this.route.params === name))
      .subscribe(
        data => this.work = data.work,
        (error: Error) => this.error = error
      );
  }
}
