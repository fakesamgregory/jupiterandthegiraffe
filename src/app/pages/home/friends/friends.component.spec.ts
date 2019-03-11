import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsComponent } from './friends.component';
import {RouterTestingModule} from '@angular/router/testing';
import {WordpressService} from '../../../services/wordpress.service';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsComponent ],
      imports: [RouterTestingModule, WordpressService]
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
