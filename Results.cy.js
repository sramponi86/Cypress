describe('Selector example on multiple fiedls', () => {

    it('checks the feasibility of selecting and interacting distinctevely different html elements via specific properties', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=first-name-chars-left-count]').as('charsLeftSpan');
        cy.get('[data-cy=last-name-chars-left-count]').as('charsRightSpan');

        cy.get('@charsLeftSpan').then($charsLeftSpan => {
            expect($charsLeftSpan.text()).to.equal('15');
        });

        cy.get('[id="first-name-input"]').type('hello');
        cy.get('@charsLeftSpan').then($charsLeftSpan => {
            expect($charsLeftSpan.text()).to.equal('10');
        });

        cy.get('@charsRightSpan').invoke('text').should('equal', '15');
        cy.get('[id="last-name-input"]').type('hello');
        cy.get('@charsRightSpan').invoke('text').should('equal', '10');
    });
});