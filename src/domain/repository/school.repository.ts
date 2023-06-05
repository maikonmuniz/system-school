import { School } from "../entities/school/school"

export interface SchoolRepository{
    getSchool(code: string): Promise<School>;
    saveStudant(code: string, name: string, idade: number): void;
}
