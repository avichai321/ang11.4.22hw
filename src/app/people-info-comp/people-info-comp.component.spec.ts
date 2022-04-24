import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleInfoCompComponent } from './people-info-comp.component';

describe('PeopleInfoCompComponent', () => {
  let component: PeopleInfoCompComponent;
  let fixture: ComponentFixture<PeopleInfoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleInfoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleInfoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
