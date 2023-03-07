describe('user is on home page', () =>{
    it('assert user is on home page', () =>{
        cy.name().should('equal',"YirguBira")
        cy.visit('/')
        cy.get('[value="Google Search"]').should("have.text", "Google Search")
        cy.log({
            test: 'end of test-1'
        })
    })
})

describe('Google', function () {
    beforeEach(function () {
      cy.task('db:seed')
      cy.loginByGoogleApi()
    })
  
//     it('shows onboarding', function () {
//       cy.contains('Get Started').should('be.visible')
//     })
  })

describe('user signs in', () =>{
    it('asserts user signed in', () =>{
        // cy.visit('/')
        // cy.contains('Sign in').click()
        // cy.contains('username').type()
        // cy.contains('Next').click()
        // cy.contains('password').type()
        // // cy.contains('Next').click()
        // cy.log({
        //     test: 'end of test-2'
        // })
    })
})

