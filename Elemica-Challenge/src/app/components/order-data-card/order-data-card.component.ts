import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-data-card',
  templateUrl: './order-data-card.component.html',
  styleUrls: ['./order-data-card.component.css']
})
export class OrderDataCardComponent implements OnInit {

  @Input() data: any;
  @Input() displayDateSelector: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
