import { Component, OnInit } from '@angular/core';
import { CommservService } from '../commserv.service';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {

  constructor(private dbl:CommservService) { }

  ngOnInit(): void {
  }

  Y(){
   // console.log("10 lines of Code ")
   this.dbl.dbcommon();

  }
}
