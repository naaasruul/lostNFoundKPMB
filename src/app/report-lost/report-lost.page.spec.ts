import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportLostPage } from './report-lost.page';

describe('ReportLostPage', () => {
  let component: ReportLostPage;
  let fixture: ComponentFixture<ReportLostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
