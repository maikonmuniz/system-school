import { Aluno } from "../entities/alunos"

export interface AlunoRepositoryInterface{
    insert(alunos: Aluno): Promise<void>;
}