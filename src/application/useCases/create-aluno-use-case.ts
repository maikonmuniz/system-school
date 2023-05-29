import { Aluno, dateAlunos } from "../../domain/entities/alunos";
import { AlunoRepositoryInterface } from "../../domain/repository/aluno.repository"

class CreateAlunoUseCases{

    constructor (private alunoRep: AlunoRepositoryInterface){

    }

    async execute(input: dateAlunos): Promise<OutputCreateAlunoUseCases>{
        const aluno = new Aluno(input);
        await this.alunoRep.insert(aluno); 
        return aluno.toJson()
    }
}

type OutputCreateAlunoUseCases = {
    nome: string
    , idade: string
}
