import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  name="SureSH is a traINER";
  amount=123456789;
  date= new Date();
  obj={id:100,name5:"Thanesh"}
}
