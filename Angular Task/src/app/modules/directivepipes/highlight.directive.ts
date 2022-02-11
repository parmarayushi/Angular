import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') color:string=""

  @HostListener('mouseenter')setMouseEnter(){
    this.color="yellow";
  }
 
  @HostListener('mouseleave')setMouseLeave(){
   this.color="red";
 }
   constructor() { }
 
   ngOnInit(): void {
       this.color="red";
   }

}
