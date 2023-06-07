import { RepositoryInMemory } from "../infra/repository/school.repositoryMemory";
import { GetSchool } from "../application/usecases/getSchool.usecase";

export class SchoolController{

    static async getSchool(params, body){
        const inMemory = new RepositoryInMemory();
        const getSchool = new GetSchool(inMemory);
        const schoolDate = await getSchool.execute(params.code)
        return schoolDate;
    }

}