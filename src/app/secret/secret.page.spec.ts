import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecretPage } from './secret.page';

describe('SecretPage', () => {
  let component: SecretPage;
  let fixture: ComponentFixture<SecretPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
