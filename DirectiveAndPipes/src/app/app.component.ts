import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  firstName:string="";
  lastName:string="";
  currencyCode:string="INR";
  index:string="";
  currentDate=new Date();
  amount=5000;

  constructor(){

  }

  ngOnInit(): void {
      
  }
  list=[{
    id:1,
    name:"Ayushi",
    email:"aayushi12@gmail.com",
    city:"Valsad",
  },
  
  {
    id:2,
    name:"Hetvi",
    email:"hetu34@gmail.com",
    city:"Ahmedavad",
  },
  
  {
    id:3,
    name:"Haswini",
    email:"haswini58@gmail.com",
    city:"Vadodara",
  },
  
  {
    id:4,
    name:"Yash",
    email:"yash52@gmail.com",
    city:"ghandinagar",
  },
  
  {
    id:5,
    name:"Mayuri",
    email:"mayuri96@gmail.com",
    city:"Rajkot",
  },
  
  {
    id:6,
    name:"Naksh",
    email:"naksh28@gmail.com",
    city:"Valsad",
  },
  
  {
    id:7,
    name:"Nirali",
    email:"nirali51@gmail.com",
    city:"Anand",
  },
  
  {
    id:8,
    name:"Mrunal",
    email:"mrunal89@gmail.com",
    city:"Surat",
  },
  
  {
    id:9,
    name:"Ankit",
    email:"ankit56@gmail.com",
    city:"Navsari",
  },
  
  {
    id:10,
    name:"Shreya",
    email:"shreya23@gmail.com",
    city:"Bharuch",
  }];

  indexClick(i:number){
    alert(this.list[i].email+this.index);
  }

  trackByid(index:number,list:any){
    return list.id;
  }
}

