import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OstComponent } from './ost.component';

describe('OstComponent', () => {
  let component: OstComponent;
  let fixture: ComponentFixture<OstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
