describe('user is on home page', () =>{
    it('assert user is on home page', () =>{
        cy.name().should('equal',"YirguBira")
        cy.visit('/')
        cy.get('input.gNO89b').should("have.value", "Google Searc")
        cy.log({
            test: 'last of test-1'
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

