const el = require('../elements').ELEMENTS


class Login{

    acessarPaginaDeLogin(){
        cy.visit('http://localhost:4200/');  
    }

    preencherFormularioLogin(){
        cy.get('input[data-test="loginUserName"]').type('lucas');
        cy.get('input[data-test="loginPassword"]').type('spiliquide321');
    }

    submeterLogin(){
        cy.get('[data-test="loginBtn"]').click();
    }

}

export default new Login();