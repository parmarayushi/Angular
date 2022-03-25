import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public service: ResumeService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  resumeBuilder = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    designation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.maxLength(10)]],
    technicalskills: this.fb.array([this.skillField()]),
    experience: this.fb.array([this.experienceField()]),
    education: this.fb.array([this.educationField()]),
  });

  get getvalue() {
    return this.resumeBuilder.controls;
  }

  //Technical Skills
  skillField(): FormGroup {
    return this.fb.group({
      technicalskills: ['', Validators.required],
    });
  }

  get technicalskill() {
    return this.getvalue['technicalskills'] as FormArray;
  }

  addSkills() {
    this.technicalskill.push(this.skillField());
  }

  deleteSkills(index: number) {
    if (this.technicalskill.length != 1) {
      this.technicalskill.removeAt(index);
    }
    console.log(this.technicalskill.length);
  }

  //Experience
  experienceField(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      post: ['', Validators.required],
    });
  }

  get experience() {
    return this.getvalue['experience'] as FormArray;
  }

  addExperience() {
    this.experience.push(this.experienceField());
  }

  deleteExperience(index: number) {
    if (this.experience.length != 1) {
      this.experience.removeAt(index);
    }
    console.log(this.experience.length);
  }

  //Education
  educationField(): FormGroup {
    return this.fb.group({
      university: ['', Validators.required],
      cgpa: ['', Validators.required],
    });
  }

  get education() {
    return this.getvalue['education'] as FormArray;
  }

  addEducation() {
    this.education.push(this.educationField());
  }

  deleteEducation(index: number) {
    if (this.education.length != 1) {
      this.education.removeAt(index);
    }
    console.log(this.education.length);
  }

  onSubmit() {
    this.service.deleteData(1).subscribe(() => {
      this.service.saveData(this.resumeBuilder.value).subscribe();
    });
    this.route.navigate(['/resume/review']);
    console.log(this.resumeBuilder.value);
  }

  resetForm() {
    this.resumeBuilder.reset();
  }
}
