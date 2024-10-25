class Salary {
    constructor() {
        if (Salary.instance) {
            return Salary.instance; // Retorna a instância existente
        }
        Salary.instance = this; // Armazena a nova instância
        this.amount = 0; // Inicializa o salário
    }

    setSalary(amount) {
        this.amount = amount; // Define o salário
    }

    deduct(amount) {
        this.amount -= amount; // Deduz um valor do salário
    }

    getSalary() {
        return this.amount; // Retorna o salário atual
    }
}

class Purchase {
    constructor(salary) {
        this.salary = salary; // Referência à instância de Salary
    }

    buyItem(name, price) {
        if (this.salary.getSalary() >= price) {
            this.salary.deduct(price); // Deduz o preço do item do salário
            console.log(`Compra realizada: ${name} por R$${price.toFixed(2)}`);
        } else {
            console.log(`Saldo insuficiente para comprar ${name}.`);
        }
    }
}

// Uso do Singleton
const salary = new Salary();
salary.setSalary(100); // Define o salário como R$100

const purchase1 = new Purchase(salary);
purchase1.buyItem('Maçã', 20); // Compra maçã
purchase1.buyItem('Banana', 50); // Compra banana

const purchase2 = new Purchase(salary);
purchase2.buyItem('Laranja', 40); // Tenta comprar laranja

console.log(`\nSalário Restante: R$${salary.getSalary().toFixed(2)}`); // Mostra o saldo restante

const purchase3 = new Purchase(salary);
purchase2.buyItem('Pêra', 10); // Tenta comprar pera

console.log(`\nSalário Restante: R$${salary.getSalary().toFixed(2)}`); // Mostra o saldo restante
