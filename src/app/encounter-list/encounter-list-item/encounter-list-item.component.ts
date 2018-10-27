import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encounter-list-item',
  templateUrl: './encounter-list-item.component.html',
  styleUrls: ['./encounter-list-item.component.scss']
})
export class EncounterListItemComponent implements OnInit {
  @Input() encounterName: string;
  @Input() encounterSummary: string;

  constructor() { }

  ngOnInit() {
  }

}
