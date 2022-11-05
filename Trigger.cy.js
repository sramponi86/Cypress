describe('Basic page interaction triggers', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/example-4');

        cy.get('[data-cy=box-4-items-list] > :nth-child(1)').as('OptionOne');
        cy.get('[data-cy=box-4-items-list]  > :nth-child(2)').as('OptionTwo');
        cy.get('[data-cy=box-4-items-list]  > :nth-child(3)').as('OptionThree');
        cy.get('[data-cy=box-4-selected-name]').as('Selection');
    });

    it('mouse over option 1', () => {

        cy.get('@OptionOne').trigger('mouseover');

        cy.get('@Selection').then(Selection => {
            expect(Selection.text()).to.equal('Option One');
        });

    });


});