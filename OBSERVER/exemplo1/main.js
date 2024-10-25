// Classe Subject (Contador)
class Contador {
    constructor() {
        this.observers = [];  // Lista de observadores
        this.valor = 0;       // Valor inicial do contador
    }

    // Método para adicionar um observador
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Método para notificar todos os observadores
    notifyObservers() {
        this.observers.forEach(observer => observer(this.valor));
    }

    // Método para incrementar o contador
    increment() {
        this.valor++;
        this.notifyObservers();  // Notifica os observadores após a alteração
    }
}

// Criando um observador
const observer1 = (valor) => console.log("Observador 1: O contador é " + valor);
const observer2 = (valor) => console.log("Observador 2: O contador é " + valor);

// Criando o contador e adicionando os observadores
const contador = new Contador();
contador.addObserver(observer1);
contador.addObserver(observer2);

// Incrementando o contador e notificando os observadores
contador.increment(); // Saída: Observador 1: O contador é 1
                      //         Observador 2: O contador é 1
contador.increment(); // Saída: Observador 1: O contador é 2
                      //         Observador 2: O contador é 2
contador.increment(); // Saída: Observador 1: O contador é 3
                      //         Observador 2: O contador é 3
