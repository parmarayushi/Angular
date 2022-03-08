import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentData') public name:string="";
  @Output() public childEvent =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.childEvent.emit("Hello...!");
  }

}
