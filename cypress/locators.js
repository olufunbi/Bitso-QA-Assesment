/// <reference types="cypress" />
export const SELECTORS = {
    EMAIL_FIELD: `//input[@id='client_id']`,
    PASSWORD_FIELD: `//input[@id='password']`,
    LOGIN_BUTTON: `//button[text()='Log in']`,
    BTC: `//small[text()='btc']`,
    ETH: `//small[text()='eth']`,
    BCH: `//small[text()='bch']`,
    DAI: `//small[text()='dai']`,
    XRP: `//small[text()='xrp']`,
    MANA: `//small[text()='mana']`,
    DEPOSIT: `//span[@class='moon-arrow_deposit']//following::small[text()='Deposit']`,
    FUNDING_CURRENCY_ADDRESS: `//small[contains(text(),'Funding')][contains(text(),'address')]`,
    BITSO_TRANSFER: `//small[contains(text(),'Receive')][contains(text(),'from other Bitso users')]`,
    PROFILE_ICON: `//div[text()='Profile']`,
    ERROR_MESSAGE: `//h3[text()='Oops! Something went wrong']`,
    ERROR_ICON: `//span[@class='moon-alert']`,
    ADD_BENEFICIARY: `//h2[text()='Add beneficiary']`,
    FIRST_NAME: `//input[@id='first_name']`,
    LAST_NAME: `//input[@id='last_name']`,
    SECOND_LAST_NAME: `//input[@id='second_last_name']`,
    DAY_DROPDOWN: `//label[@for='day']/following::div[1]`,
    MONTH_DROPDOWN: `//label[@for='month']/following::div[1]`,
    YEAR_DROPDOWN: `//label[@for='year']/following::div[1]`,
    KINSHIP_DROPDOWN: `//label[@for='relationship']/following::div[1]`,
    PERCENTAGE_FIELD: `//input[@id='percentage']`,
    ADD_BUTTON: `//button[@data-testid='add-beneficiary-button']`,
    CONFIRM_BENEFICIARY_MODAL: `//h3[text()='Confirm beneficiary']`,
    TRANSACTION_PIN_FIELD: `//input[@id='pin']`,
    CONFIRM_BUTTON: `//button[text()='Confirm']`,
    RELATIVE_OPTION: `//div[text()='Relative'][contains(@id,'react-select')]`,
    INCORRECT_PIN: `//div[text()='Incorrect PIN']`,
  }