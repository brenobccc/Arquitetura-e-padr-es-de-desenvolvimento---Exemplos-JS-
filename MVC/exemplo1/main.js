const View =  require("./view/AlunoView");
const Model =  require("./model/Aluno");
const Controller =  require("./controller/AlunoController");

//inicializando o MVC
const model = new Model('Breno','Informática para Internet');
const controller = new Controller(model);   
const view = new View(controller);

view.mostrarDetalhesAluno();


//Exibindo dados do aluno
//view.mostrarDetalhesAluno();

