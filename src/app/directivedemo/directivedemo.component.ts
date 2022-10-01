import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mydiv=true

  fruits=["Apple","Banana","Cherry","Graps","Chicko"];

  addfruits(addfruit:any)
  {
    console.log("Fruit Name : ",addfruit)
    this.fruits.push(addfruit);
  }
  peoples: any[] = [
    {
      "name": "Douglas  Pace",
      "Age":25
    },
    {
      "name": "Mcleod  Mueller",
      "Age":35
    },
    {
      "name": "Day  Meyers",
      "Age":45
    },
    {
      "name": "Aguirre  Ellis",
      "Age":55
    },
    {
      "name": "Cook  Tyson",
      "Age":65
    }
  ];


  opt=1111;

}
