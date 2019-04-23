import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {WordpressService} from '../../services/wordpress.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MockWordpressService} from '../../services/wordpress.mockservice';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {EmailPopupComponent} from '../email-popup/email-popup.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, EmailPopupComponent ],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
