import { Component, OnInit } from '@angular/core';
import { CommnservService } from '../commnserv.service';

@Component({
  selector: 'app-httprecords',
  templateUrl: './httprecords.component.html',
  styleUrls: ['./httprecords.component.css']
})
export class HttprecordsComponent implements OnInit {

  constructor(private rec:CommnservService) { }

 myrecords:any=[]; 
  ngOnInit() {
    
    return this.rec.getProducts().subscribe(
      data=>{
          console.log("responce recived ",data)
          this.myrecords=data;

        },
      error=>{console.log("exception recoved ")}
    )
  }

}
