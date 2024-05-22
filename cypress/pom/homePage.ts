/// <reference types="Cypress" />

import { CommonMethods } from "./commonMethods"

export class HomePage extends CommonMethods{

    //Selectors
    
    basketcounterNumber: string = '.counter-number'
    loggedIn: string = '.logged-in'
  

    //Methods

    openHomePage() {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get(this.basketcounterNumber).should('not.be.visible')
    }

    selectHeaderLink(headerLinkText: string) {
        cy.get('.header.links').contains(headerLinkText).click()

    }
  
  }
  
  export const homePage = new HomePage();