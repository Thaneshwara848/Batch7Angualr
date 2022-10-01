import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommservService } from '../commserv.service';

@Component({
  selector: 'app-z',
  templateUrl: './z.component.html',
  styleUrls: ['./z.component.css']
})
export class ZComponent implements OnInit {

  constructor(private dbl:CommservService) { }

  ngOnInit(): void {
  }

  Z(){
    //console.log("10 lines of code ")
     this.dbl.dbcommon()
  }
}
