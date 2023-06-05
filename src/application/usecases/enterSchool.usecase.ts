import { SchoolRepository } from '../../domain/repository/school.repository';
import { Studant } from '../../domain/entities/studant/studants';
import { error } from 'console';

export class CreateSchoolUseCase{

    schoolRepository: SchoolRepository;

    constructor( schoolRepository: SchoolRepository ){
        this.schoolRepository = schoolRepository;
    }

    async execute(code: string, name: string, idade: number){
        const school = await this.schoolRepository.getSchool(code);
        if(!school.isRegister()){
            throw new Error("Sem vagas no momento!");
        }
        const studant = new Studant(code, name, idade)
        await this.schoolRepository.saveStudant(studant.code, studant.name, studant.idade)
    }
}
