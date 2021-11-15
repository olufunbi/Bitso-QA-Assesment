/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import { SELECTORS } from '../../locators'
import { CREDENTIALS } from '../../credentials'

describe('Verify Error message displayed when deposit is trigerred for XRP', () => {
    it('Login to the application', () => {
    
        // Navigate to the Login URL
        cy.visit('/login')
        // Enter Email and password
        cy.xpath(SELECTORS.EMAIL_FIELD).click().type(CREDENTIALS.EMAIL)
        cy.xpath(SELECTORS.PASSWORD_FIELD).click().type(CREDENTIALS.PASSWORD)
        // Click on the Login button and verify profile icon to verify login
        cy.xpath(SELECTORS.LOGIN_BUTTON).click()
        cy.xpath(SELECTORS.PROFILE_ICON).should('be.visible')
        
  })
  it('clicks on the XRP asset, deposit button and verifies error message', () => {
    
    // Click on the XRP currency
    cy.xpath(SELECTORS.XRP).click()
    // Click on the Deposit button
    cy.xpath(SELECTORS.DEPOSIT).should('be.visible').click()
    // Click on one of the funding options
    cy.xpath(SELECTORS.FUNDING_CURRENCY_ADDRESS).should('be.visible').click()
    // Verify that the Error modal, Error message and Error Icon is displayed
    cy.xpath(SELECTORS.ERROR_MESSAGE).should('be.visible')
    cy.xpath(SELECTORS.ERROR_ICON).should('be.visible')

})


  })
