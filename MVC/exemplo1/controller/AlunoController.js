class AlunoController{
    constructor(model){
        this.model = model;
    }

    alterarNomeAluno(nome){
        this.model.setNome(nome);
    }

    obterNomeAluno(){
        return this.model.getNome();
    }

    alterarCursoAluno(curso){
        this.model.setCurso(curso);
    }

    obterCursoAluno(){
        return this.model.getCurso();
    }
}

module.exports = AlunoController;