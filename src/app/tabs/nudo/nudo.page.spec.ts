import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NudoPage } from './nudo.page';

describe('NudoPage', () => {
  let component: NudoPage;
  let fixture: ComponentFixture<NudoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
