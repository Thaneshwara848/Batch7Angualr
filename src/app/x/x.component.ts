import { Component, OnInit } from '@angular/core';
import { CommservService } from '../commserv.service';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {

  constructor(private dbl:CommservService) { }

  ngOnInit(): void {
  }
  x(){
    //console.log("10 lines of Code ")
    this.dbl.dbcommon();
  }
}
