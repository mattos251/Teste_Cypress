import Login from '../support/pages/login/pagina-login' 

describe('Pagina de login', () => {
    
    beforeEach(()=>{
        cy.visit('http://localhost:4200/')

    })
    
    it('Preencher os campos de login de forma correta', () => {

      Login.acessarPaginaDeLogin();
      Login.preencherFormularioLogin();
      Login.submeterLogin();

    })
})