export interface Employee {
    id: number;
    name: string,
    age: number,
    gender: string,
    hobbies: string[],
}

export interface Department {
    id: number;
    name: string,
    emps: Employee[],
}
