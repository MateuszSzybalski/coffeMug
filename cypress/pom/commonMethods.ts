/// <reference types="Cypress" />

export class CommonMethods {

    //Selectors
    
    logo: string = ".logo"
    serach: string = '#search'
    headerLinks: string = '.header.links'
  

    //Methods

    clickButton(selector: string) {
        cy.get(selector).click()
    }

    checkIfUrlPathIsCorrect(path: string) {
        cy.url().should('contain',path)
    }

    checkIfUrlIsCorrect(url: string) {
        cy.url().should('eq',url)
    }

    checkIfTitlePageIsCorrect(title: string) {
        cy.title().should('eq',title)
    }

    checkIfElementIsDisplayed(selector: string) {
        cy.get(selector).should('be.visible')
    }

    selectHeaderLink(headerLinkText: string) {
        cy.get(this.headerLinks).contains(headerLinkText).click()
    }

    checkIfElementConatinsCorrectText(selector: string, text: string) {
        cy.get(selector).should('be.visible').and('contain',text)
    }

    checkIfElementConatinsCorrectNumber(selector: string, number: number) {
        cy.get(selector).should('be.visible').and('contain',number)
    }

    searchProduct(product: string) {
        cy.get(this.serach).type(product).type('{enter}')
    }

    catchRequest = (method: string, url: string, alias: string) => {
        cy.intercept({method, url}).as(alias);
    }

    waitForServiceResponse = (aliasName: string) => {
        cy.wait("@" + aliasName);
    }
  
  }
  
  export const commonMethods = new CommonMethods();