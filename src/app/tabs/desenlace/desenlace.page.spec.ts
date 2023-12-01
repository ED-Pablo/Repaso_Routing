import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesenlacePage } from './desenlace.page';

describe('DesenlacePage', () => {
  let component: DesenlacePage;
  let fixture: ComponentFixture<DesenlacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesenlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
