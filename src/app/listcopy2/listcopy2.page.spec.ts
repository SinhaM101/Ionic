import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCopy2Page } from './listcopy2.page';

describe('ListCopy2Page', () => {
  let component: ListCopy2Page;
  let fixture: ComponentFixture<ListCopy2Page>;
  let listCopy2Page: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCopy2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCopy2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    listCopy2Page = fixture.nativeElement;
    const items = listCopy2Page.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
