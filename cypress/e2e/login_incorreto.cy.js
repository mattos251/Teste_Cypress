describe('Pagina de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/')

        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

    it('Verificar mensagens dos campos obrigatorios de login', () => {
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
    })

    it('deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('lucas', 'spiliquide321');
        cy.wait('@stubPost')
    })

})



// describe('Pagina de login', () => {
//     it('Preencher somente o campo nome do login', () => {
//         cy.visit('http://localhost:4200/#/home')
//         cy.get('[data-test="loginUserName"]').type('Lucas')
//         cy.contains('Password is required!').should('be.visible');
//     })
// })