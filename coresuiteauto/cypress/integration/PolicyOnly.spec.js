import { xorBy } from 'lodash';
import { CustomCypress } from '../support/commands';
import testData from "../fixtures/ConvertedExcelInput.json"
      describe('Creates New policy', () => {

        beforeEach(function () {
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });

          cy.fixture("ConvertedExcelInput").then(test => {
            // "this" is still the test context object
            this.testdata = test;
            // cy.log(this.testdata).debug();
          });

        });

      testData.Test_data_ID.forEach((data) => {
              const compare = item => item.Test_data_ID === data.Test_data_ID;

        it(testData.Test_data_ID.find(compare).Test_case_Description, function () {
          let round = 0;
            round = round+1;
            console.log(round);
            cy.clearCookies();

            cy.login( this.testdata.Environment.find(compare).Username, this.testdata.Environment.find(compare).Password, this.testdata.Environment.find(compare).Database,);
            cy.get('#shell\\/menu\\/menu\\.new', { timeout: 100000 }).click();
            cy.get("#shell\\/menu\\/newApplication", { timeout: 100000 }).click();
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.company", this.testdata.Main_details.find(compare).Brand);
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.product", this.testdata.Main_details.find(compare).Product);
            cy.wait(3000);
            cy.selectFromDropdown("#vaadin-text-field-input-7 > slot:nth-child(2) > input", this.testdata.Main_details.find(compare).Source)
            cy.insertText("#vaadin-text-field-input-35", this.testdata.Person_details.find(compare).person_id);
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.allInsured", this.testdata.Main_details.find(compare).Role);
            cy.get('#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.payer',{timeout:100000}).invoke("attr","aria-checked").then(state=>{
              
              if(state==="true"){
                console.log("state is TRUE");
              }else if(state==="false"){
                console.log("state is FALSE");
                cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.payer", { timeout: 100000 }).click();
              }
            })
            cy.get('#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.owner',{timeout:100000}).invoke("attr","aria-checked").then(state=>{
              
              if(state==="true"){
                console.log("state is TRUE");
              }else if(state==="false"){
                console.log("state is FALSE");
                cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.owner", { timeout: 100000 }).click();
              }
            })

            cy.selectFromDropdownTest("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.retirementAge",this.testdata.Main_details.find(compare).Intended_retirement_age);          
            cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.button_7", { timeout: 100000 }).click({force:true});
            cy.insertText("#uiAgentSearchId\\/internalAgentID", "10001"); 
            cy.get("#uiAgentSearchId\\/searchButton", { timeout: 100000 }).click().wait(3000);
            cy.get("#uiAgentSearchId\\/table_17 > vaadin-grid-cell-content:nth-child(7)").dblclick().then(()=>{
              
            })
            cy.get("#uiAgentSearchId\\/select", { timeout: 100000, withinSubject:null }).click({force:true});
            cy.get('#mainNewBusiness\\/mainDetails\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/PolicyRolesNew\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            cy.get('[slot="vaadin-grid-cell-content-19"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/contType', { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/contributions\\/global\\.res\\.delRow', { timeout: 100000 }).click();
            cy.get("#mainNewBusiness\\/contributions\\/table_22 > vaadin-grid-cell-content:nth-child(24)", { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/contributions\\/global\\.res\\.delRow', { timeout: 100000 }).click();
            cy.get('[slot="vaadin-grid-cell-content-1"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/contType', { timeout: 100000 }).click();
            cy.get('#main\\.conts_openLightbox', { timeout: 100000 }).click();
          	cy.get("#vaadin-text-field-input-69 > slot:nth-child(2) > input").type(this.testdata.Contributon.find(compare).Premium);
         
            cy.get("#main\\.conts_lightbox_done", { timeout: 100000 }).focus().click();
            cy.get('[slot="vaadin-grid-cell-content-9"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/fundSelectionContLevel > .spml-addon-append > #mainNewBusiness\\/contributions\\/lookupButton_2', { timeout: 100000 }).click();
            cy.get("#uiFunds\\/uiFundsGpfCust\\.addedItem", { timeout: 100000 }).click();
            cy.get("#uiFunds\\/uiFundsGpfCust\\.fundProfile", { timeout: 100000 }).click().then(dropdown => {
              cy.wrap(dropdown).get("#content").find("[part='content']").contains(this.testdata.Contributon.find(compare).Select_Funds).click({ force: true });
              cy.get("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund", { timeout: 100000 }).click();
              cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund", this.testdata.Contributon.find(compare).Profile_Category);
              cy.get("#uiFunds\\/uiFundsGpfCust\\.investmentName1", { timeout: 100000 }).click();
              cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.investmentName1", this.testdata.Contributon.find(compare).Investment_profile_name);

              cy.get("#uiFunds\\/paymentFundsTable > vaadin-grid-cell-content:nth-child(30)").find("input").focus().clear({ force: true }).type(this.testdata.Contributon.find(compare).Allocation_percent, { force: true });

            });
            cy.get("#uiFunds\\/okButton", { timeout: 100000 }).click();
            cy.get("#mainNewBusiness\\/contributions\\/saveButton").click({ force: true });
            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-vertical-layout > span:nth-child(1)", { timeout: 100000 }).invoke('text').then((text) => {

              var policyNum = text.split(" ")[2];

              cy.wrap(policyNum).as('policyNum');
              console.log(policyNum.split(" ")[2]);
            });
        
    });
          });
          });
      







 