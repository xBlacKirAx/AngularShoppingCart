import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecordService, Record } from './record.service';

@Component({
  selector: 'app-help',
  template: `
                <input type="text" [(ngModel)]="purchaseId" placeholder="x1234"><br>
                <button routerLink="/record-display/{{purchaseId}}">Submit</button>
            `,
  styleUrls: ['./help.component.css'],
  providers: [RecordService]
})
export class HelpComponent implements OnInit {
  purchaseId: string;
  record: any;
  constructor(private recordService: RecordService) {}

  ngOnInit() {
  }

}
