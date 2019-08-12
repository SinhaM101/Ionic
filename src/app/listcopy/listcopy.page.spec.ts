import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCopyPage } from './listcopy.page';

describe('ListPage', () => {
  let component: ListCopyPage;
  let fixture: ComponentFixture<ListCopyPage>;
  let listCopyPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCopyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCopyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    listCopyPage = fixture.nativeElement;
    const items = listCopyPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
