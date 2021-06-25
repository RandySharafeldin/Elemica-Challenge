import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-order-data-card',
  templateUrl: './order-data-card.component.html',
  styleUrls: ['./order-data-card.component.css']
})
export class OrderDataCardComponent implements OnInit {

  @Input() data: any;
  @Input() displayDateSelector: boolean | undefined;
  @Output() dateSelected = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  dateChanged(evt: any) {
    console.log(evt)
    this.dateSelected.emit(evt.value)
  }
}
