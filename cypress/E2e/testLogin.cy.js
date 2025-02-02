/// <reference types="Cypress" />

// import registerData from '../../fixtures/registerData.json'

import { registerPage } from "../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../fixtures/registerData.json'

describe("om", () => {
    it("namah shivaya", () => {
        registerObj.openURL(Cypress.env('URL'))
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterlastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()

    })
})