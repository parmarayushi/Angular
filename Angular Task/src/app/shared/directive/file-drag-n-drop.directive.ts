import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileDragNDrop]'
})
export class FileDragNDropDirective {

  @Output() readFile: EventEmitter<any>;
  constructor() {
    this.readFile = new EventEmitter();
  }

  @HostListener('dragover', ['$event']) public onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.readFile.emit(evt.dataTransfer);
  }
}
