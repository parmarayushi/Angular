export class Customer {
  public id: number;
  public firstname: string;
  public lastname: string;
  public city: string;
  public contactno: number;
  public email: string;
  public age: number;
  public department: number;
  public gender: string;
  constructor(
    id: number,
    firstname: string,
    lastname: string,
    city: string,
    contactno: number,
    email: string,
    age: number,
    department: number,
    gender: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.city = city;
    this.contactno = contactno;
    this.email = email;
    this.age = age;
    this.department = department;
    this.gender = gender;
  }
  public static comparator(property: keyof Customer, isReverse: number): any {
    return (a: Customer, b: Customer) =>
      isReverse *
      (a[property] < b[property] ? -1 : a[property] === b[property] ? 0 : 1);
  }
}

export class Department {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class Filter {
  customerage: number;
  city: string;
  gender: string;
  constructor(customerage: number, city: string, gender: string) {
    this.customerage = customerage;
    this.city = city;
    this.gender = gender;
  }
}
