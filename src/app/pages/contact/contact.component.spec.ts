import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { RecaptchaModule } from 'ng-recaptcha';
import {Angulartics2} from 'angulartics2';

import { environment } from '../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {SocialComponent} from '../../global/social/social.component';
import {WINDOW} from '@ng-toolkit/universal';

const mockAngulartics2 = {
  eventTrack: {
    event: () => true,
  }
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ ContactComponent, SocialComponent ],
      providers: [
        {provide: WINDOW},
        { provide: Angulartics2, useValue: mockAngulartics2 },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
