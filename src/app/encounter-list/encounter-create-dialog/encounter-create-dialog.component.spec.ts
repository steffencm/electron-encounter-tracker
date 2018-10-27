import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterCreateDialogComponent } from './encounter-create-dialog.component';

describe('EncounterCreateDialogComponent', () => {
  let component: EncounterCreateDialogComponent;
  let fixture: ComponentFixture<EncounterCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
