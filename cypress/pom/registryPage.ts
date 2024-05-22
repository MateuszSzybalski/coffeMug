/// <reference types="Cypress" />

import { CommonMethods } from "./commonMethods"

export class RegistryPage extends CommonMethods{

    //Selectors

    firstName: string = '#firstname'
    lastName: string = '#lastname'
    emailAddress: string = '#email_address'
    password: string = '#password'
    passwordConfirmation: string = '#password-confirmation'
    buttonTitle: string = '[title="Create an Account"]'

    pageTitleWrapper: string = '[data-ui-id="page-title-wrapper"]'
    passwordStrenghtMeter: string = '#password-strength-meter'
    pageMessages: string = '.page.messages'
  

    //Methods

    fillTheRegistryForm() {
        cy.fixture("example").then((user) => {
        cy.get(this.firstName).type(user.firstName)
        cy.get(this.lastName).type(user.lastName)
        cy.get(this.emailAddress).type(user.emailAddress)
        cy.get(this.password).type(user.password)
        cy.get(this.passwordConfirmation).type(user.password)
        })  
    }

    fillTheRegistryFormRandom() {
        const randomFirstName = Math.random().toString(36).substring(2,15)
        const randomLastName = Math.random().toString(36).substring(2,15)
        const randomEmail = Math.random().toString(10).substring(2,15)+'@test.com'

        cy.get(this.firstName).type(randomFirstName)
        cy.get(this.lastName).type(randomLastName)
        cy.get(this.emailAddress).type(randomEmail)
        cy.get(this.password).type('Asdf1234!')
        cy.get(this.passwordConfirmation).type('Asdf1234!')
    }

    

    addToBasket() {
        cy.get(this.buttonTitle).click()
    }

    checkIfPasswordStrengthIsNotWeak() {
        cy.get(this.passwordStrenghtMeter).should('not.contain.text','No Password').and('not.contain.text','Weak')
    }
}
  
  export const registryPage = new RegistryPage();