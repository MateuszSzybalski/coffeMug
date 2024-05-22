/// <reference types="Cypress" />

import { CommonMethods } from "./commonMethods"

export class CatalogSearch extends CommonMethods{

    //Selectors
    
    items: string = '.items'
    filterValue: string = '.filter-value'
    itemProducts: string = '.item.product.product-item'
    buttonAddToCart: string = '#product-addtocart-button'
    basketcounterNumber: string = '.counter-number'
    infoAboutAddedIntoBasket: string = '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'
    pageTitleWrapper: string = '[data-ui-id="page-title-wrapper"]'
    miniCart: string = '[data-block="minicart"]'
    productItemName: string = '.product-item-name'
  

    //Methods

    selectFilter(categoryName: string) {
        cy.get(this.items).contains(categoryName).click()
    }

    checkIfProductIsOnItemList(productName: string) {
        cy.get(this.itemProducts).should('have.lengthOf.greaterThan', 0).and('contain.text', productName)
    }

    selectProduct(productName: string) {
        cy.get(this.itemProducts).contains(productName).click()
    }

    checkIfProductNameFromBasketIsTheSameAsAdded() {
        cy.get(this.pageTitleWrapper).invoke("text").then((productName) => {
            cy.get(this.miniCart).click()
            cy.get(this.productItemName).invoke("text").then((productNameFromMiniCart) => {
              expect(productNameFromMiniCart.trim().replace(/[\n]/, '')).is.equal(productName)
            })
          })
    }
  
  }
  
  export const catalogSearch = new CatalogSearch();