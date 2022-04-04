import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileListPresenterService } from '../file-list-presenter/file-list-presenter.service';
import { MyFile } from '../file.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss'],
})
export class FileListPresentationComponent implements OnInit {
  @Input() public set fileList(value: MyFile[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): MyFile[] {
    return this._fileList;
  }

  @Output() public delete: EventEmitter<number>;

  private _fileList: MyFile[];

  constructor(private fileListPresenter: FileListPresenterService) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.fileListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    });
  }

  public onDelete(id: number) {
    this.fileListPresenter.onDelete(id);
  }

  public viewFile(content: string, type: string) {
    this.fileListPresenter.showFile(content, type);
  }
}
