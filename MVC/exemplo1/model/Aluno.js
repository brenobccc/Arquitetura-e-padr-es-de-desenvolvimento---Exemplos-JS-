class Aluno{
    //atributos
    nome;
    curso;

    constructor(nome, curso){
        this.nome = nome;
        this.curso = curso;
    }

    //Métodos de Acesso(GET) e Métodos de alteração(SET)
    getNome(){
        return this.nome
    }

    setNome(nome){
        this.nome = nome; 
    }

    getCurso(){
        return this.curso;
    }

    setCurso(curso){
        this.curso = curso;
    }
}

module.exports = Aluno;