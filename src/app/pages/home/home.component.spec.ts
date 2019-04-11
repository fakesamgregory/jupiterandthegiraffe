import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FriendsComponent} from './friends/friends.component';
import {DotsComponent} from '../../global/dots/dots.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {SnowComponent} from '../../global/snow/snow.component';
import {AgmCoreModule} from '@agm/core';
import {WINDOW} from '@ng-toolkit/universal';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FriendsComponent, DotsComponent, SnowComponent ],
      imports: [RouterTestingModule, HttpClientModule, AgmCoreModule.forRoot({})],
      providers: [
        {provide: WINDOW},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
