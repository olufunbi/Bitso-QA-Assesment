/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import { SELECTORS } from '../../locators'
import { CREDENTIALS } from '../../credentials'

describe('Verify Incorrect PIN error', () => {

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const firstName = `First${id}`
    const lastName = `Last${id}`
    const secondLastName = `Second${lastName}`

  it('Logs into the application, fills the details and attempts to add a beneficiary via UI', () => {
   
    // Navigate to the Login URL
    cy.visit('/login')

    // Enter Email and password
    cy.xpath(SELECTORS.EMAIL_FIELD).click().type(CREDENTIALS.EMAIL)
    cy.xpath(SELECTORS.PASSWORD_FIELD).click().type(CREDENTIALS.PASSWORD)

    // Click on the Login button and verify profile icon to verify login
    cy.xpath(SELECTORS.LOGIN_BUTTON).click()
    cy.xpath(SELECTORS.PROFILE_ICON).should('be.visible')

    //Navigate to add beneficiary page
    cy.visit('/r/user/beneficiaries/add')
    cy.xpath(SELECTORS.ADD_BENEFICIARY).should('be.visible')

    // Fill in the first name, last name and second last name
    cy.xpath(SELECTORS.FIRST_NAME).click().type(firstName)
    cy.xpath(SELECTORS.LAST_NAME).click().type(lastName)
    cy.xpath(SELECTORS.SECOND_LAST_NAME).click().type(secondLastName)

    // Select the Birthdate 
    cy.xpath(SELECTORS.DAY_DROPDOWN).click().type('12').type('{enter}')
    cy.xpath(SELECTORS.MONTH_DROPDOWN).click().type('March').type('{enter}')
    cy.xpath(SELECTORS.YEAR_DROPDOWN).click().type('1996').type('{enter}')

    // Select the Kinship
    cy.xpath(SELECTORS.KINSHIP_DROPDOWN).click()
    cy.xpath(SELECTORS.RELATIVE_OPTION).click()

    // Enter the benefit percentage and click Add button
    cy.xpath(SELECTORS.PERCENTAGE_FIELD).click().type('90')
    cy.xpath(SELECTORS.ADD_BUTTON).should('be.enabled').click()

    //Verify that the confirm beneficiary modal is displayed
    cy.xpath(SELECTORS.CONFIRM_BENEFICIARY_MODAL).should('be.visible')
    cy.xpath(SELECTORS.TRANSACTION_PIN_FIELD).click().type(id)

    //Click on the Confirm button and intercept API call
    cy.intercept('POST','/api/v3/beneficiaries/23546').as('add-beneficiary')
    cy.xpath(SELECTORS.CONFIRM_BUTTON).should('be.enabled').should('be.visible').click()
    

    // Use API to verify Incorrect PIN error messasge since it does not appear in UI
    cy.wait('@add-beneficiary').its('response.statusCode').should('eq', 401)
    
    // cy.xpath(SELECTORS.INCORRECT_PIN).should('exist') //This command would have been used to verify the error messgae if it was displayed consistently
    cy.get('@add-beneficiary').should(addNew => {
        cy.log(addNew)
        expect(addNew.response.body.error.message).to.eql('Incorrect PIN')
    })
    
})

  })
