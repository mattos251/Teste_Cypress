import Cadastro from '../support/pages/cadastro/pagina-cadastro' 

describe('Pagina de cadastro', () => {

  beforeEach(()=>{

    cy.visit('http://localhost:4200/')

  })


  it('Preencher os campos de cadastro corretamente e clicar no botao de envio de formulario', () => {  

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();

    // cy.contains('[data-test="register]').click();
    // cy.get('[data-test="email"]').type('lucassousa.d.m251@gmail.com')
    // cy.get('[data-test="fullName"]').type('Lucas sousa de Matos')
    // cy.get('[data-test="registerUserName"]').type('lucas')
    // cy.get('[data-test="registerPassword"]').type('spiliquide321')
    // cy.contains('[data-test="btnRegister"]').click();


  })
})