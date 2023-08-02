import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbarComponent } from './subbar.component';

describe('SubbarComponent', () => {
  let component: SubbarComponent;
  let fixture: ComponentFixture<SubbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubbarComponent]
    });
    fixture = TestBed.createComponent(SubbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
