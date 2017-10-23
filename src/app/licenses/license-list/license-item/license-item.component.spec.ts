import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseItemComponent } from './license-item.component';

describe('LicenseItemComponent', () => {
  let component: LicenseItemComponent;
  let fixture: ComponentFixture<LicenseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
