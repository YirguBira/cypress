describe('user is on home page', () =>{
    it('asserts user is on home page', () =>{
        const y = cy.name()
        y.should('equal',"Yirgu")
        cy.visit('/')
        cy.get(':nth-child(1) > .gb_d').should("have.text", "Gmail")
        

    })
})