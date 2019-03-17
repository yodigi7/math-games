import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProblemComponent } from './simple-problem.component';

describe('SimpleProblemComponent', () => {
  let component: SimpleProblemComponent;
  let fixture: ComponentFixture<SimpleProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
