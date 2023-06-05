import { SchoolRepository } from "../../domain/repository/school.repository"
import { School } from "../../domain/entities/school/school"
import { StudantAdapter } from "../../adapter/StudantAdapter"
export class RepositoryInMemory implements SchoolRepository {

    studants = [];
    schoolList = [
    { code: "12345", name: "Peralta", capacity: 2500, quantity: 2450 }
    ]

    getSchool(code: string): Promise<School> {
        const schoolDate = this.schoolList.find(school => school.code === code);
        const studantAdapter = StudantAdapter.create(schoolDate.code, schoolDate.name, schoolDate.capacity, schoolDate.quantity)
        return Promise.resolve(studantAdapter);
    }

    saveStudant(code: string, name: string, idade: number): void {
        this.studants.push({code: '12345', name: "joão", idade: "25"});
    }
}
