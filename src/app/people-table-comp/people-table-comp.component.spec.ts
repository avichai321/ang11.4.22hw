import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTableCompComponent } from './people-table-comp.component';

describe('PeopleTableCompComponent', () => {
  let component: PeopleTableCompComponent;
  let fixture: ComponentFixture<PeopleTableCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleTableCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTableCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
