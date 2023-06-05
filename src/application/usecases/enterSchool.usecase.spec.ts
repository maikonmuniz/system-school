import { CreateSchoolUseCase } from "./enterSchool.usecase";
import { RepositoryInMemory } from "../../infra/repository/school.repositoryMemory";

describe("teste", () => {
    it.skip("tef", async () => {
        const repositoryInMemory  = new RepositoryInMemory();
        const createSchoolUseCase = new CreateSchoolUseCase(repositoryInMemory);
        const enter               = await createSchoolUseCase.execute("1234", "name", 25);
    
    })
});
