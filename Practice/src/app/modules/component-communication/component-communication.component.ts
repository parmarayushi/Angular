import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit {

  entername:string;
  data:string;
  value:string = "";
  
  
  sendData(){
    this.data=this.entername;
  }
  
  sendtitle(value:string){
    this.value=value
  }

  constructor() { }
  ngOnInit(): void {

  }
}
