import { CustomCypress } from '../support/commands';


describe('Testing login', () => {
    it('Logs in and creates new person', () => {
        cy.login();
        cy.get('#shell\\/menu\\/menuBar_7').find("div > vaadin-menu-bar-button:nth-child(1)").click();
        cy.get("#shell\\/menu\\/newPerson").click().wait(5000);
        cy.get('.spml-label-value > span').should("contain.text","Person Details");    
        cy.insertText("#ClientDetails\\/firstNameUppercase","Peter");
        cy.insertText('#ClientDetails\\/surrNameUppercase',"Parker");
        cy.selectFromDropdown('#ClientDetails\\/Gender2',"Male");
        cy.get("#vaadin-text-field-input-8").type("02019255131");
        cy.insertDate('#ClientDetails\\/DateOfBirth',"02.01.1992"); 
        cy.selectFromDropdown('#ClientDetails\\/Smoker2',"Yes");
        cy.selectFromDropdown('#ClientDetails\\/Occupation',"Sport");
        //cy.insertText('#ClientDetails\\/EnterpriseClientId',"123412341");
        cy.selectFromDropdown('#ClientDetails\\/PersonStatus',"Active");
        cy.selectFromDropdown('#ClientDetails\\/clientDetailsCust\\.education',"Not relevant");
        cy.get("#ClientDetails\\/saveButton").find("button").click();
        cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary").click();

})
})