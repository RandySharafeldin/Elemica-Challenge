import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-purchase-confirmation-card',
  templateUrl: './purchase-confirmation-card.component.html',
  styleUrls: ['./purchase-confirmation-card.component.css']
})
export class PurchaseConfirmationCardComponent implements OnInit {

  titlePrefix = "Line 0010"
  orderTitle = "NaCl (Sodium Chloride)"
  dateToSubmit: string | undefined;

  status = 0;

  statusTexts = [
    {
      iconName: "warning",
      text: "Once you click submit below, your Buyer will recieve your order confirmation.",
      class: "status-accept"
    },
    {
      iconName: "thumb_down_alt",
      text: "Once you click submit below, your Buyer will recieve your rejection.",
      class: "status-reject"
    },
    {
      iconName: "edit",
      text: "Once you click submit below, your Buyer will receive your change request.",
      class: "status-change"
    }
  ]

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

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitDate() {
    if (this.status === 0) {
      if (this.dateToSubmit) {
        this.snackbar.open("Submited order for " + (new Date(this.dateToSubmit)).toDateString(), "close", { duration: 3000 })
      } else {
        this.snackbar.open("Please enter in a valid date", "close",)
      }
    } else if (this.status === 1) {
      this.snackbar.open("Your rejection has been sent", "close", { duration: 3000 })
    } else if (this.status === 2) {
      this.snackbar.open("Your change request has been sent", "close", { duration: 3000})
    }
  }
}
