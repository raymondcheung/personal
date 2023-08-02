import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowComponent } from './now.component';

describe('NowComponent', () => {
  let component: NowComponent;
  let fixture: ComponentFixture<NowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowComponent]
    });
    fixture = TestBed.createComponent(NowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
