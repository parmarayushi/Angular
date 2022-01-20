import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  name="Sunflower";
  imgUrl="../../assets/img/sunflower.jpg";
  data:any

 
  ngOnInit(): void {
      
  }

  onClick()
  {
    console.log("Welcome");
  }
}
