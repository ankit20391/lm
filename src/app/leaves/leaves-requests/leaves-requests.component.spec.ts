import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesRequestsComponent } from './leaves-requests.component';

describe('LeavesRequestsComponent', () => {
  let component: LeavesRequestsComponent;
  let fixture: ComponentFixture<LeavesRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
