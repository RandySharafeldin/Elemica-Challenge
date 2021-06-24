import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-confirmation-card',
  templateUrl: './purchase-confirmation-card.component.html',
  styleUrls: ['./purchase-confirmation-card.component.css']
})
export class PurchaseConfirmationCardComponent implements OnInit {

  titlePrefix = "Line 0010"
  orderTitle = "NaCl (Sodium Chloride)"

  firstCard = {
    sectionTitle: "Quantity",
    firstDataTitle: "Ordered",
    firstData: "21,000 KGM",
    secondDataTitle: "Confirmed",
    secondData: "21,000 KMG"
  }

  secondCard = {
    sectionTitle: "Expected Arrival Date",
    firstDataTitle: "Requested",
    firstData: "06-28-2018",
    secondDataTitle: "Confirmed",
    secondData: "06-28-2018"
  }

  thirdCard = {
    sectionTitle: "Price",
    firstDataTitle: "Requested",
    firstData: "80 USD / 2 KMG",
    secondDataTitle: "Confirmed",
    secondData: "80 USD / 2 KMG"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
