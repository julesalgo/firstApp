import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueteDirectivesComponent } from './quete-directives.component';

describe('QueteDirectivesComponent', () => {
  let component: QueteDirectivesComponent;
  let fixture: ComponentFixture<QueteDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueteDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueteDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
