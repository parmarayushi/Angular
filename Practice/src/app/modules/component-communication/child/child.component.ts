import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name:string;

  @Output() public sendTitle = new EventEmitter<string>();
  constructor() { 
    this.sendTitle.emit("Title!!");
  }

  ngOnInit(): void {
  }

}
