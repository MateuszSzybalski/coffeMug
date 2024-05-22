import { should } from "chai"
import { homePage } from "../pom/homePage"
import { registryPage } from "../pom/registryPage"
import { catalogSearch } from "../pom/catalogSearch"

describe('template spec', () => {

  beforeEach('Main page', () => {
    homePage.openHomePage()
  })
  it('User Registration and Login', () => {
    homePage.checkIfUrlIsCorrect('https://magento.softwaretestingboard.com/')
    homePage.checkIfTitlePageIsCorrect('Home Page')
    homePage.selectHeaderLink('Create an Account')
    registryPage.checkIfUrlPathIsCorrect('/customer/account/create/')
    registryPage.checkIfElementIsDisplayed(registryPage.pageTitleWrapper)
    registryPage.fillTheRegistryFormRandom()
    registryPage.checkIfPasswordStrengthIsNotWeak()
    registryPage.clickButton(registryPage.buttonTitle)
    registryPage.checkIfUrlPathIsCorrect('/customer/account/')
    registryPage.checkIfElementConatinsCorrectText(registryPage.pageMessages, 'Thank you for registering with Main Website Store.')
    registryPage.clickButton(registryPage.logo)
    homePage.checkIfUrlIsCorrect('https://magento.softwaretestingboard.com/')
    homePage.checkIfElementIsDisplayed(homePage.loggedIn)
  })

  it('Product Search and Filter', () => {
    homePage.searchProduct('Bolo Sport')
    catalogSearch.checkIfUrlPathIsCorrect('/catalogsearch/result/')
    catalogSearch.selectFilter('Gear')
    catalogSearch.checkIfElementConatinsCorrectText(catalogSearch.filterValue, 'Gear')
    catalogSearch.checkIfProductIsOnItemList('Bolo Sport')
  })

  it('Adding Items to Cart', () => {
    homePage.searchProduct('Bolo Sport')
    catalogSearch.selectFilter('Gear')
    catalogSearch.selectProduct('Bolo Sport')
    catalogSearch.catchRequest('GET', '/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/collection.html', 'request')
    //cy.intercept('GET', '/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/collection.html').as("sth")
    catalogSearch.clickButton(catalogSearch.buttonAddToCart)
    catalogSearch.waitForServiceResponse('request')
    catalogSearch.checkIfElementConatinsCorrectNumber(catalogSearch.basketcounterNumber, 1)
    catalogSearch.checkIfElementIsDisplayed(catalogSearch.infoAboutAddedIntoBasket)
    catalogSearch.checkIfProductNameFromBasketIsTheSameAsAdded()
  })
})