describe('Basic page interaction', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/example-4');

        cy.get('[data-cy=box-1-items-list] > :nth-child(1)').as('OptionOne');
        cy.get('[data-cy=box-1-items-list]  > :nth-child(2)').as('OptionTwo');
        cy.get('[data-cy=box-1-items-list]  > :nth-child(3)').as('OptionThree');
        cy.get('[data-cy=box-1-selected-name]').as('Selection');
    });

    it('check double click function on option one', () => {

        cy.get('@OptionOne').dblclick();

        cy.get('@Selection').then(Selection => {
            expect(Selection.text()).to.equal('Option One');
        });

    });

    it('check double click function on option two', () => {

        cy.get('@OptionTwo').dblclick();

        cy.get('@Selection').then(Selection => {
            expect(Selection.text()).to.equal('Option Two');
        });

    });

    it('check double click function on option three', () => {

        cy.get('@OptionThree').dblclick();

        cy.get('@Selection').then(Selection => {
            expect(Selection.text()).to.equal('Option Three');
        });

    });
});