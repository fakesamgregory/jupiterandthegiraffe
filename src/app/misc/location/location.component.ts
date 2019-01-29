import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public location: String;
  public type: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.location = this.route.snapshot.data.location;
    this.type = this.route.snapshot.data.type;
  }
}
