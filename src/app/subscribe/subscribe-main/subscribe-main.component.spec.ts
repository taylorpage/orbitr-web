import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeMainComponent } from './subscribe-main.component';

describe('SubscribeMainComponent', () => {
  let component: SubscribeMainComponent;
  let fixture: ComponentFixture<SubscribeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
