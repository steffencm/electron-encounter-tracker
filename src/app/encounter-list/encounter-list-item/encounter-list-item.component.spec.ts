import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterListItemComponent } from './encounter-list-item.component';

describe('EncounterListItemComponent', () => {
  let component: EncounterListItemComponent;
  let fixture: ComponentFixture<EncounterListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
