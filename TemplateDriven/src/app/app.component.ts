import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TemplateDriven';
  public userModel = new User();
  constructor() {}

  onFirstName(firstName: string) {
    console.log(firstName);
    debugger;
  }

  onSubmit(userForm: { form: { value: any } }) {
    console.log(userForm.form.value);
  }
}
