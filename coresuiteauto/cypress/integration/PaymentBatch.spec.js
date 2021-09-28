import { CustomCypress } from '../support/commands';


describe('Testing login', () => {
    it('Creates new payment', () => {
        cy.login();
        cy.get('#shell\\/menu\\/menu\\.payment').click();
        cy.get("#shell\\/menu\\/paymentsBatch").click();
        cy.get("#shell\\/menu\\/newPaymentBatch").click();
        cy.selectFromDropdown('#vaadin-text-field-input-7 > slot:nth-child(2) > input',"Ready for validation");
        cy.selectFromDropdown('#vaadin-text-field-input-9 > slot:nth-child(2) > input',"Giro");
        cy.insertText("#NewPaymentBatch\\/cashrecieved","1500");
        cy.get('#NewPaymentBatch\\/global\\.res\\.addRow').click();
        cy.insertText("#NewPaymentBatch\\/destkeyidNotApp","4000018");
        
       
        // cy.get("#shell\\/menu\\/newPerson").click().wait(5000);
        // cy.get('.spml-label-value > span').should("contain.text","Person Details");    
        // cy.insertText("#ClientDetails\\/firstNameUppercase","Pavol");
        // cy.insertText('#ClientDetails\\/surrNameUppercase',"Duplinsky");
        // cy.selectFromDropdown('#ClientDetails\\/Gender2',"Female");
        // cy.get("#vaadin-text-field-input-8").type("12345678910");
        // cy.insertDate('#ClientDetails\\/DateOfBirth',"20.02.2020");
        // cy.selectFromDropdown('#ClientDetails\\/Smoker2',"Yes");
        // cy.selectFromDropdown('#ClientDetails\\/Occupation',"Sport");
        // cy.insertText('#ClientDetails\\/EnterpriseClientId',"123123123");
        // cy.selectFromDropdown('#ClientDetails\\/PersonStatus',"Dead");
        // cy.selectFromDropdown('#ClientDetails\\/clientDetailsCust\\.education',"Not relevant");
})
})