import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shipping-data-pannel',
  templateUrl: './shipping-data-pannel.component.html',
  styleUrls: ['./shipping-data-pannel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShippingDataPannelComponent implements OnInit {

  constructor() { }

  discription =  "Table Salt, 100KG Tanks"
  shipToCity = "Amsterdam"
  shipToStreet = "1234 Tulipo Lane"
  shipToProvince = "Ludwisgshasfen DE 12346"
  suppId = "12341723661"
  upc = "121238723001"
  contract = "23081090910"

  ngOnInit(): void {
  }

}
