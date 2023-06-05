import { SchoolRepository } from '../../domain/repository/school.repository';

export class GetSchool {
    schoolRepository: SchoolRepository;

    constructor( schoolRepository: SchoolRepository ){
        this.schoolRepository = schoolRepository;
    }

    execute(code: string){
        return this.schoolRepository.getSchool(code);
    }

}