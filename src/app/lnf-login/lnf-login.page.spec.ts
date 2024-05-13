import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LnfLoginPage } from './lnf-login.page';

describe('LnfLoginPage', () => {
  let component: LnfLoginPage;
  let fixture: ComponentFixture<LnfLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LnfLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
