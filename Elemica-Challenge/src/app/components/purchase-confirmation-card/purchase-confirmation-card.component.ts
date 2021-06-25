import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-purchase-confirmation-card',
  templateUrl: './purchase-confirmation-card.component.html',
  styleUrls: ['./purchase-confirmation-card.component.css']
})
export class PurchaseConfirmationCardComponent implements OnInit {

  //here we set the text to be used in the component

  titlePrefix = "Line 0010"
  orderTitle = "NaCl (Sodium Chloride)"
  dateToSubmit: string | undefined;

  //these status values change based on the value of the select toggle button
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

  //more default text to send to our order data cards
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

  //the logic for submission is as follows:
  //if accept is selected we check that the date is valid and if so we display a success if not we prompt for a valid date
  //if reject or change is selected we do not check for a date we only display an appropriate message.
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
