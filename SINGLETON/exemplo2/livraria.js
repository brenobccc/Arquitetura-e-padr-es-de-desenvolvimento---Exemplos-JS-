class Library {
    constructor() {
        if (Library.instance) {
            return Library.instance; // Retorna a instância existente
        }
        Library.instance = this; // Armazena a nova instância
        this.books = []; // Inicializa a lista de livros
    }

    addBook(book) {
        this.books.push(book); // Adiciona um livro à biblioteca
    }

    rentBook(title) {
        const book = this.books.find(b => b.title === title && b.available);
        if (book) {
            book.available = false; // Marca o livro como alugado
            console.log(`Livro alugado: "${title}"`);
        } else {
            console.log(`Desculpe, o livro "${title}" não está disponível.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            book.available = true; // Marca o livro como disponível
            console.log(`Livro devolvido: "${title}"`);
        } else {
            console.log(`O livro "${title}" não pertence a esta biblioteca.`);
        }
    }

    listAvailableBooks() {
        const availableBooks = this.books.filter(b => b.available);
        console.log("Livros disponíveis:");
        availableBooks.forEach(b => console.log(`- ${b.title}`));
    }
}

class Book {
    constructor(title) {
        this.title = title; // Define o título do livro
        this.available = true; // Marca o livro como disponível inicialmente
    }
}

// Uso do Singleton
const library = new Library();

// Adiciona livros à biblioteca
library.addBook(new Book('O Senhor dos Anéis'));
library.addBook(new Book('1984'));
library.addBook(new Book('O Hobbit'));

// Lista livros disponíveis
library.listAvailableBooks(); // Mostra todos os livros disponíveis

// Aluga um livro
library.rentBook('1984'); // Aluga "1984"
library.rentBook('O Hobbit'); // Aluga "O Hobbit"

// Tenta alugar um livro já alugado
library.rentBook('1984'); // Tenta alugar novamente "1984"

// Lista livros disponíveis após aluguel
library.listAvailableBooks(); // Mostra livros ainda disponíveis

// Devolve um livro
library.returnBook('1984'); // Devolve "1984"

// Lista livros disponíveis após devolução
library.listAvailableBooks(); // Mostra todos os livros disponíveis novamente
