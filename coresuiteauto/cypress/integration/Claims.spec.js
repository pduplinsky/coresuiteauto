import { curry, xorBy } from 'lodash';
import { CustomCypress } from '../support/commands';
import testData from "../fixtures/IPS_backdated.json"
      describe('Creates New policy', () => {

        beforeEach(function () {
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });

          cy.fixture("IPS_backdated").then(test => {
            // "this" is still the test context object
            this.testdata = test;
            // cy.log(this.testdata).debug();
          });

        });
    let counter = 0;
      testData.Test_data_ID.forEach((data) => {
              const compare = item => item.Test_data_ID === data.Test_data_ID;
     
        it(testData.Test_data_ID.find(compare).Test_case_Description, function () {

          // if(counter<4){
          //   counter++;
          //   return
          // }

      //  counter++;
          let round = 0;
            round = round+1;
            console.log(round);
            cy.clearCookies();
        
         //cy.login("Clerk","E2E","GPF_UAT_Integration1");
          cy.login("Clerk","a","GPF_SIT_Automation");
            cy.insertText("#alis-search-panel-text","4000001");
            cy.get("#alis-search-button").click();
            cy.get("#shell\\/search\\/policyNo1").dblclick();
            cy.wait(3000);
            //RIGHTCLICK ON CLAIMS panel
            cy.get("#policyDashboard\\/mainPolicyDashboardView_7").rightclick();
            //click on ADD WITHDRAWAL
            cy.get("#overlay > vaadin-context-menu-list-box > vaadin-context-menu-item:nth-child(2)").click({timeout:10000});
            cy.wait(2000);

            cy.selectFromDropdown("#mainClaim\\/claimGeneralDetails\\/claimGeneral\\.claimType","Retirement");
            cy.wait(2000);
            //Proceed to next screen
            cy.get("#mainClaim\\/claimGeneralDetails\\/hexNext").click({timeout:10000});
            cy.wait(5000);
             //Proceed to next screen
            cy.get("#mainClaim\\/claimCoveragesFunds\\/hexNext").click({timeout:10000});

            cy.get("#selectAllCheckbox").click({timeout:10000});
            cy.get("#view_40_openLightbox").click({timeout:10000});

            //copy the name of the account and fill it in.
            cy.get("#mainClaim\\/claimPaymentOrders\\/infoForm").then((el)=>{
                          
              //  var name = cy.wrap(el).find("label").invoke("text");
                cy.get("#mainClaim\\/claimPaymentOrders\\/accountName").type("Eli Vaa");

                //fill in account number
                cy.insertText("#mainClaim\\/claimPaymentOrders\\/claimPaymentOrdersGpfCust\\.textPassword","12345678911");
            });

            cy.selectFromDropdownTest("#mainClaim\\/claimPaymentOrders\\/paymentDayDD","18");
            cy.get("#view_40_lightbox_done").click();
            cy.selectFromDropdown("#mainClaim\\/claimPaymentOrders\\/stage","Approval")
            cy.get("#mainClaim\\/claimPaymentOrders\\/saveButton").click();
            

          
        cy.wait(20000); 
         
});
      });
    });




  