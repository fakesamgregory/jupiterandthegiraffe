import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsComponent } from './friends.component';
import {RouterTestingModule} from '@angular/router/testing';
import {WordpressService} from '../../../services/wordpress.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsComponent ],
      imports: [RouterTestingModule],
      providers: [
        WordpressService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
