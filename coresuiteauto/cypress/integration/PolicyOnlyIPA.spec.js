
import { CustomCypress } from '../support/commands';
import testData from "../fixtures/IPAv6.json"
      describe('Creates New policy', () => {

        beforeEach(function () {
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });

          cy.fixture("IPAv6").then(test => {
            // "this" is still the test context object
            this.testdata = test;
            // cy.log(this.testdata).debug()
          });

        });
        let counter = 0;
      testData.Test_data_ID.forEach((data) => {
              const compare = item => item.Test_data_ID === data.Test_data_ID;

        it(testData.Test_data_ID.find(compare).Test_case_Description, function () {
          let round = 0;
            round = round+1;
            console.log(round);
            cy.clearCookies();

            // if(counter<177){
            //   counter++;
            //   return;
            // }

            cy.login("Clerk","a","GPF_UAT_Integration1");
            cy.get('#shell\\/menu\\/menu\\.new', { timeout: 100000 }).click();
            cy.get("#shell\\/menu\\/newApplication", { timeout: 100000 }).click();
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.company", this.testdata.Main_details.find(compare).Brand);
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.product", this.testdata.Main_details.find(compare).Product);
            cy.wait(3000);
            // cy.get("#vaadin-text-field-input-7 > slot:nth-child(2) > input").click({timeout:100000});
            cy.selectFromDropdown("#vaadin-text-field-input-7 > slot:nth-child(2) > input", this.testdata.Main_details.find(compare).Source)
            //cy.insertText("#vaadin-text-field-input-35", this.testdata.Person_details.find(compare).person_id);
        
          

            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.allInsured", this.testdata.Main_details.find(compare).PersonRole);
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
    //GK Find
    cy.get('#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.buttonFindPersonDetails').click().then(()=>{

      cy.get("flow-component-renderer").find("#uiPersonSearchId\\/uiPersonSearchIdCust\\.nationalInsRef\\ ").find("input").type(this.testdata.Person_details.find(compare).IDReference);
      cy.get("#uiPersonSearchId\\/PersonLookup\\.searchCRM").click({timeout:100000});
      cy.get("#uiPersonSearchId\\/ClientId",{timeout:100000}).dblclick({timeout:100000});
      cy.get("#uiPersonSearchId\\/select",{timeout:100000}).click({timeout:100000});
      cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button",{timeout:100000}).click();
  })
  
            
            cy.selectFromDropdownTest("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.retirementAge",this.testdata.Main_details.find(compare).IntendedRetirementAge);      
            cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.addPA").click().then((pop)=>{
              cy.get("#PaymentArrangementGrid\\/method").click().then(()=>{
                //cy.get("body").find("vaadin-combo-box-overlay").not("hidden").eq(0).find("#selector").find("#content").contains("Giro").click({multiple:true});
                cy.get("#PaymentArrangementGrid\\/saveButton").click().then(()=>{
                  cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button").click();
                })
              })
            
            })  
          
            cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.button_7", { timeout: 100000 }).click({force:true});
            cy.insertText("#uiAgentSearchId\\/internalAgentID", "200006"); 
            cy.get("#uiAgentSearchId\\/searchButton", { timeout: 100000 }).click().wait(3000);
            cy.get("#uiAgentSearchId\\/table_17 > vaadin-grid-cell-content:nth-child(7)").dblclick().then(()=>{
              
            })
            cy.get("#uiAgentSearchId\\/select", { timeout: 100000, withinSubject:null }).click({force:true});
            cy.get('#mainNewBusiness\\/mainDetails\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/PolicyRolesNew\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            // cy.get('#mainNewBusiness\\/coverages\\/nextStepButton',{timeout:100000}).click();

            cy.get("#mainNewBusiness\\/contributions\\/contType_2").dblclick().then(()=>{
              cy.insertText("#mainNewBusiness\\/contributions\\/premiumForLayer_1",this.testdata.Contributon.find(compare).Premium3);
              cy.get("#contLayers_lightbox_done",{timeout:100000}).click();
      
          });
       
          cy.get("#mainNewBusiness\\/contributions\\/contLayerTable",{timeout:100000}).find("#mainNewBusiness\\/contributions\\/precent_2").find("#mainNewBusiness\\/contributions\\/lookupButton_22").click();
          cy.get("#uiFunds\\/uiFundsGpfCust\\.addedItem", { timeout: 100000 }).click();
            cy.get("#uiFunds\\/uiFundsGpfCust\\.fundProfile", { timeout: 100000 }).click().then(dropdown => {
              cy.wrap(dropdown).get("#content").find("[part='content']").contains(this.testdata.Contributon.find(compare).Fund_Profile_3).click({ force: true });
              cy.get("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund", { timeout: 100000 }).click();
              cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund", this.testdata.Contributon.find(compare).Assetclass_ProfileCategory_3);
              cy.get("#uiFunds\\/uiFundsGpfCust\\.investmentName1", { timeout: 100000 }).click();
              cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.investmentName1", this.testdata.Contributon.find(compare).Investmentfund_Profilename_3);

              cy.get("#uiFunds\\/paymentFundsTable > vaadin-grid-cell-content:nth-child(30)").find("input").focus().clear({ force: true }).type("100", { force: true });

            });
            cy.get("#uiFunds\\/okButton", { timeout: 100000 }).click();
            // cy.wait(10000);
            // cy.get("#mainNewBusiness\\/Contributons\\/transferSection > div.spml-row.spml-first-row > div:nth-child(2) > div > vaadin-button").click({force:true});
            // cy.selectFromDropdown("#mainNewBusiness\\/Contributons\\/replacmentInfoType","Internal");
            // cy.get('#mainNewBusiness\\/Contributons\\/CompanyChoose').click();
            // cy.get("#uiCompanySearchId\\/searchButton").click();
            // cy.get("#uiCompanySearchId\\/table_17").find("vaadin-grid-cell-content").eq(0).click();
            // cy.get("#uiCompanySearchId\\/select").click({force:true});
            
            cy.get("#mainNewBusiness\\/contributions\\/saveButton").click({ force: true });
            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-vertical-layout > span:nth-child(1)", { timeout: 100000 }).invoke('text').then((text) => {

              var policyNum = text.split(" ")[2];

              cy.wrap(policyNum).as('policyNum');
              console.log(policyNum.split(" ")[2]);
              cy.writeFile("C:\\Users\\g024068\\OneDrive - Gjensidige Forsikring ASA\\Dokumenter\\GitHub\\coresuiteauto\\coresuiteautooutput.txt",policyNum + " " + this.testdata.Person_details.find(compare).IDReference + " row: " + round + "\n"  ,{flag:'a'});

            });
            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary",{timeout:100000}).click();
           cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.newBussines","Pre Active");

            
            cy.get('#mainNewBusiness\\/mainDetails\\/saveButton',{timeout:10000}).click();
            cy.wait(3000);
          cy.screenshot();
        
    });
          });
          });
      







 