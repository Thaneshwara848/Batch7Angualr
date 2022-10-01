import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinddemo',
  templateUrl: './databinddemo.component.html',
  styleUrls: ['./databinddemo.component.css']
})
export class DatabinddemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // name="Suresh";
  // company=" IBM "

  // abc()
  // {
  //   console.log("Hi ABC METHOD")
  // }

  // xyz(){
  //   console.log("Hi XYZ Method...!")
  // }
  // MyDec=true;
  // myImgpath='../../assets/D.jpg';




  count=0;
  mydec=false
  incr(){
   
    //console.log(this.count++)
    if(this.count>4)
    {
      // alert("Dont add motre the 5 ")
      this.mydec=true
    }
    else{
      this.count++;
    } 
  }

  decr(){
    this.count--;
   // console.log(this.count--)
  }


myname='';
data(name1:any){
  this.myname=name1
  console.log("My name is ",name1)
}
sum=0;
ptr(princ:any,time:any,roi:any){
  this.sum =(princ * time * roi)/100
}

myroi=0;
loan(loanytype:any)
{
  console.log(loanytype.target.value)
  if(loanytype.target.value=='car'){
    this.myroi=6;
  }
  else if(loanytype.target.value=='home')
  {
    this.myroi=7;
  }
  else if(loanytype.target.value=='gold')
  {
    this.myroi=9;
  }

}






















}
