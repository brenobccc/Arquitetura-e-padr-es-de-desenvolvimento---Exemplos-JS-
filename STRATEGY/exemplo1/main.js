// Interface Strategy
class Strategy {
    execute(a, b) {
        throw new Error("This method should be overridden!");
    }
}

// Implementações concretas da Strategy
class ConcreteStrategyAdd extends Strategy {
    execute(a, b) {
        return a + b; // Adição
    }
}

class ConcreteStrategySubtract extends Strategy {
    execute(a, b) {
        return a - b; // Subtração
    }
}

class ConcreteStrategyMultiply extends Strategy {
    execute(a, b) {
        return a * b; // Multiplicação
    }
}

// Contexto que utiliza as estratégias
class Context {
    constructor(strategy) {
        this.strategy = strategy; // Define a estratégia inicial
    }

    setStrategy(strategy) {
        this.strategy = strategy; // Permite mudar a estratégia em tempo de execução
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b); // Delegação para a estratégia
    }
}

// Código do cliente
class ExampleApplication {
    main() {
        const context = new Context(); // Cria um objeto de contexto

        // Simulação de entrada do usuário
        const a = 5; // Primeiro número
        const b = 3; // Segundo número
        const action = 'addition'; // Ação desejada

        // Define a estratégia com base na ação
        if (action === 'addition') {
            context.setStrategy(new ConcreteStrategyAdd());
        } else if (action === 'subtraction') {
            context.setStrategy(new ConcreteStrategySubtract());
        } else if (action === 'multiplication') {
            context.setStrategy(new ConcreteStrategyMultiply());
        }

        const result = context.executeStrategy(a, b); // Executa a estratégia
        console.log(`Resultado: ${result}`); // Exibe o resultado
    }
}

// Executa o exemplo
const app = new ExampleApplication();
app.main();
