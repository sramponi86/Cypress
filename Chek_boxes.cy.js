describe('Basic page interaction on check elements', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/example-4');

        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1)').as('OptionOne');
        cy.get('[data-cy=box-2-checkboxes]  > :nth-child(2)').as('OptionTwo');
        cy.get('[data-cy=box-2-checkboxes]  > :nth-child(3)').as('OptionThree');
        cy.get('[data-cy=box-2-selected-count]').as('SelectionCount');
    });

    it('check click on 2 elements', () => {

        cy.get('@OptionOne').click();
        cy.get('@OptionThree').click();

        cy.get('@SelectionCount').then(SelectionCount => {
            expect(SelectionCount.text()).to.equal('2');
        });

    });

    
});