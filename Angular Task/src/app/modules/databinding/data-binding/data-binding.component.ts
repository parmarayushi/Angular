import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name="Sunflower";
  imgUrl="../../assets/images/sunflower.jpg";
  data:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    console.log("Welcome");
  }

}
