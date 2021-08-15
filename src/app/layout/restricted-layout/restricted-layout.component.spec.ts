import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedLayoutComponent } from './restricted-layout.component';

describe('RestrictedLayoutComponent', () => {
  let component: RestrictedLayoutComponent;
  let fixture: ComponentFixture<RestrictedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
