import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarumSagavComponent } from './larum-sagav.component';

describe('LarumSagavComponent', () => {
  let component: LarumSagavComponent;
  let fixture: ComponentFixture<LarumSagavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarumSagavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarumSagavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
