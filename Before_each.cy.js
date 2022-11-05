describe('Selector example on multiple fiedls', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=first-name-chars-left-count]').as('charsLeftSpan');
        cy.get('[data-cy=last-name-chars-left-count]').as('charsRightSpan');
    });

    it('check first field of the page', () => {

        cy.get('@charsLeftSpan').then($charsLeftSpan => {
            expect($charsLeftSpan.text()).to.equal('15');
        });

        cy.get('[id="first-name-input"]').type('hello');
        cy.get('@charsLeftSpan').then($charsLeftSpan => {
            expect($charsLeftSpan.text()).to.equal('10');
        });

    });

    it('test second field on the page', () => {

        cy.get('@charsRightSpan').then($charsRightSpan => {
            expect($charsRightSpan.text()).to.equal('15');
        });

        cy.get('[id="last-name-input"]').type('hello');
        cy.get('@charsRightSpan').then($charsRightSpan => {
            expect($charsRightSpan.text()).to.equal('10');
        });

    });
});