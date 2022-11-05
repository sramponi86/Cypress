describe('Selector example on multiple fiedls', () => {
    it('checks the feasibility of selecting distinctevely different html elements via index', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('span').eq(0).invoke('text').should('equal', '15');

        cy.get('span').eq(1).invoke('text').should('equal', '15');

    });

    it('checks the feasibility of selecting distinctevely different html elements via specific properties', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=first-name-chars-left-count]').invoke('text').should('equal', '15');

        cy.get('[data-cy=last-name-chars-left-count]').invoke('text').should('equal', '15');

    });

    it('checks the feasibility of selecting and interacting distinctevely different html elements via specific properties', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=first-name-chars-left-count]').invoke('text').should('equal', '15');
        cy.get('[id="first-name-input"]').type('hello');
        cy.get('[data-cy=first-name-chars-left-count]').invoke('text').should('equal', '10');

        cy.get('[data-cy=last-name-chars-left-count]').invoke('text').should('equal', '15');
        cy.get('[id="last-name-input"]').type('hello');
        cy.get('[data-cy=last-name-chars-left-count]').invoke('text').should('equal', '10');
    });
});