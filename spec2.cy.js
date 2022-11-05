describe('Max char input text', () => {
    it('displays the right amount of characters left', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('span').invoke('text').should('equal', '15');

        cy.get('input').type('hello');
        cy.get('span').invoke('text').should('equal', '10');

    });

    it('prevents the user to insert more char when maxed out', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('input').type('aserfgcertyhvbgtyuh');
        cy.get('input').should('have.attr', 'value', 'aserfgcertyhvbg');
        cy.get('span').invoke('text').should('equal', '0');

    });
});