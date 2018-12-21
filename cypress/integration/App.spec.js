/// <reference types="Cypress" />

context('Todo', () => {
	beforeEach(() => {
		cy.visit('http://localhost:1234/');
	});

	it('has the expected h1 header', () => {
		cy.get('.m-header').should('contain', `HELLO FROM Vue.JS`);
	});

	it('adds todos', () => {
		const todo = 'Eat Sushi';

		cy.addTodo(todo);

		cy.get('.m-todo-list_todos')
			.should('contain', todo);
	})
});
