import { Component, OnInit } from '@angular/core';
import { Resume } from '../model/resume.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss'],
})
export class ResumeViewComponent implements OnInit {
  resume: Resume;
  constructor(private service: ResumeService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.service.getData(1).subscribe((data) => {
      this.resume = data;
    });
  }
}
