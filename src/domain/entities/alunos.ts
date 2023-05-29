
export class Aluno{
    public alunoObj: dateAlunos;

    constructor(alunoObj: dateAlunos){
        this.alunoObj = alunoObj;
    }

    toJson(){
        return this.alunoObj;
    }
}

export type dateAlunos = {
    nome: string
    , idade: string
}
