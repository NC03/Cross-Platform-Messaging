import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividualMessagePage } from './individual-message.page';

describe('IndividualMessagePage', () => {
  let component: IndividualMessagePage;
  let fixture: ComponentFixture<IndividualMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
