import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FriendsComponent} from './friends/friends.component';
import {DotsComponent} from '../../global/dots/dots.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { BenefitsComponent } from './benefits/benefits.component';
import { ServicesComponent } from './services/services.component';
import { WeAreComponent } from './we-are/we-are.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { GetInTouchComponent } from 'src/app/global/get-in-touch/get-in-touch.component';
import { QuotesComponent } from './quotes/quotes.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FriendsComponent,
        DotsComponent,
        ServicesComponent,
        BenefitsComponent,
        WeAreComponent,
        CaseStudiesComponent,
        GetInTouchComponent,
        QuotesComponent,
      ],
      imports: [RouterTestingModule, HttpClientModule,
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
