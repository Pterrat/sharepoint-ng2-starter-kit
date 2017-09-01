import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PterratListComponent } from './pterrat-list.component';

describe('PterratListComponent', () => {
  let component: PterratListComponent;
  let fixture: ComponentFixture<PterratListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PterratListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PterratListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
