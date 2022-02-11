class Skills{
    technicalskills:string;
}

class Experience{
    name:string;
    year:number;
    post:string
}

class Education{
    university:string;
    cgpa:number;
}

export class Resume{
    name:string;
    designation:string;
    email:string;
    contact:number;
    technicalskills:Skills[];
    experience:Experience[];
    education:Education[]
}