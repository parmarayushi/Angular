interface Skills{
    technicalskills:string;
}

interface Experience{
    name:string;
    year:number;
    post:string
}

interface Education{
    university:string;
    cgpa:number;
}

export interface Resume{
    name:string;
    designation:string;
    email:string;
    contact:number;
    technicalskills:Skills[];
    experience:Experience[];
    education:Education[]
}