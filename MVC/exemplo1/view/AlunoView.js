class AlunoView {
    AlunoController;
    constructor(AlunoController){
        this.AlunoController = AlunoController;
    }
    mostrarDetalhesAluno() {
        console.log("Aluno:");
        console.log("   Nome do Aluno: " + this.AlunoController.obterNomeAluno());
        console.log("   Curso: " + this.AlunoController.obterCursoAluno());
    }
}

module.exports =  AlunoView;