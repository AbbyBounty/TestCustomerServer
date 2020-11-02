import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryDetailsComponent } from './view-history-details.component';

describe('ViewHistoryDetailsComponent', () => {
  let component: ViewHistoryDetailsComponent;
  let fixture: ComponentFixture<ViewHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
