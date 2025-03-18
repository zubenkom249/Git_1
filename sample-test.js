describe('React App Tests', () => {
    it('should load the page', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Welcome').should('be.visible');
    });

    it('should check basic math', () => {
        expect(2 + 2).to.equal(4);
    });
});