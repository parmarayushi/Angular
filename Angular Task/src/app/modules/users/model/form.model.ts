export class Department {
  id: number;
  name: string;
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  date: string;
  department: number;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    department: number,
    date: string,
    id: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.department = department;
    this.date = date;
  }

  public getFullName(): string {
    return this.firstName.concat(' ', this.lastName);
  }
}
