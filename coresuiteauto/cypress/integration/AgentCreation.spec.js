import { CustomCypress } from '../support/commands';
      describe('Creates New policy', () => {

        it("Creating an Agent", function () {
        cy.login( "Clerk","a","GPF_SIT_Automation");
                cy.get("div > vaadin-menu-bar-button:nth-child(1)").click();
                cy.get("#shell\\/menu\\/menu\\.agent\\.newAgent").click({force:true});
                cy.selectFromDropdown("#agentsGroup\\/agentDetails\\/businessIndividualValue","Individual").then(()=>{
                    cy.insertText("#agentsGroup\\/agentDetails\\/first","Laura");    
                    cy.insertText("#agentsGroup\\/agentDetails\\/last","Test1");
                    cy.get("#vaadin-date-picker-text-field-input-12 > slot:nth-child(2) > input").type("30.04.1949");
                    cy.selectFromDropdown("#agentsGroup\\/agentDetails\\/gender","Female");  
                    cy.insertText("#agentsGroup\\/agentDetails\\/npn","1234563") ;
                    cy.selectFromDropdown("#agentsGroup\\/agentDetails\\/PersonStatus","Active");

                })  

                cy.get("#agentsGroup\\/agentDetailsagentDetailsCustGPF\\.additionalInfo2\\/collapser").click();
                
         
        });

        });

    
          