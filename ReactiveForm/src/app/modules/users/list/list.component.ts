import { Component,OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  formList: Form[];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}
