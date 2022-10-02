import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommservService } from '../commserv.service';

@Component({
  selector: 'app-formsdemo',
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent implements OnInit {
  constructor() { }
  student:any;
  ngOnInit(): void {
this.student = new FormGroup({
  firstname:new FormControl("",Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern(/^[a-zA-Z]+$/)
  ])),
  lastname:new FormControl("",Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ])),
  age:new FormControl("",Validators.compose([
    Validators.required,
    Validators.min(18),
    Validators.max(60)
  ]))
  
})
  }
  display(mydata:any){

  }
  onSubmit(userform:any){
    console.log(userform)
}
}
