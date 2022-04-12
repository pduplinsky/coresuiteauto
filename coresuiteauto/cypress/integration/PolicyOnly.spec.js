import { curry, xorBy } from 'lodash';
import { CustomCypress } from '../support/commands';
import testData from "../fixtures/FK_200.json"
      describe('Creates New policy', () => {

        beforeEach(function () {
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });

          cy.fixture("FK_200").then(test => {
            // "this" is still the test context object
            this.testdata = test;
            // cy.log(this.testdata).debug();
          });

        });
    let counter = 0;
      testData.Test_data_ID.forEach((data) => {
              const compare = item => item.Test_data_ID === data.Test_data_ID;
     
        it(testData.Test_data_ID.find(compare).Test_case_Description, function () {

          if(counter<150){
            counter++;
            return
          }

      //  counter++;
          let round = 0;
            round = round+1;
            console.log(round);
            cy.clearCookies();

           // cy.login( this.testdata.Environment.find(compare).Username, this.testdata.Environment.find(compare).Password, this.testdata.Environment.find(compare).Database,);
         // cy.login("Clerk","a","GPF_SIT_Automation");
          cy.login("Clerk","E2E","GPF_UAT_Integration1");
          //cy.login("Clerk","a","GPF_UAT_Automation");

           cy.get('#shell\\/menu\\/menu\\.new', { timeout: 100000 }).click();
            cy.get("#shell\\/menu\\/newApplication", { timeout: 100000 }).click();
            //cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.company", this.testdata.Main_details.find(compare).Brand);
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.product", this.testdata.Main_details.find(compare).Product);
            cy.wait(3000);
            cy.selectFromDropdown('#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.source',"CoreSuite");

          //cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.allInsured", this.testdata.Main_details.find(compare).PersonRole);
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
          var clientExist = false;
          console.log("Client Exists ? " + clientExist)
            //GK FIND
          cy.get('#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.buttonFindPersonDetails').click().then(()=>{

            cy.get("flow-component-renderer").find("#uiPersonSearchId\\/uiPersonSearchIdCust\\.nationalInsRef\\ ").find("input").type(this.testdata.Person_details.find(compare).IDReference);
            cy.get("#uiPersonSearchId\\/PersonLookup\\.searchCRM").click({timeout:100000});
            cy.get("#uiPersonSearchId\\/ClientId",{timeout:100000}).dblclick({timeout:100000});
            cy.get("#uiPersonSearchId\\/select",{timeout:100000}).click({timeout:100000});
  
              cy.wait(3000);
              cy.get("body").then((body)=>{
                if(body.find("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button").length > 0){
                cy.wait(2000);
                 cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button",{timeout:10000}).click();
                 clientExist=true;
                 console.log("Client Exists ? " + clientExist)

                }
              });

        })


            cy.selectFromDropdownTest("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.retirementAge",this.testdata.Main_details.find(compare).IntendedRetirementAge).then(()=>{

     
              if(clientExist){
                cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.addPA").click().then((pop)=>{
                  cy.get("#PaymentArrangementGrid\\/method").click().then((popup)=>{
                    cy.get("body").find("vaadin-combo-box-overlay").not("hidden").eq(0).find("#selector").find("#content").contains(this.testdata.Person_details.find(compare).PaymentArrangementMethod).click({multiple:true});
                  });
                });
                if(this.testdata.Person_details.find(compare).PaymentArrangementFrequency!=="Monthly"){

                cy.wait(2000);
                    cy.get("#PaymentArrangementGrid\\/frequency").click().then(()=>{
                      cy.get("body").find("vaadin-combo-box-overlay").not("hidden").eq(0).find("#selector").find("#content").contains(this.testdata.Person_details.find(compare).PaymentArrangementFrequency).click({multiple:true});
                    });
                    cy.wait(2000);
                   
                      cy.selectFromDropdownTest("#PaymentArrangementGrid\\/day","22");
                      cy.wait(2000);
               cy.get("#PaymentArrangementGrid\\/month").click().then(()=>{
                cy.wait(2000);
                cy.get("body").find("vaadin-combo-box-overlay").not("hidden").eq(0).find("#selector").find("vaadin-combo-box-item").find("#content").contains(this.testdata.Person_details.find(compare).PaymentArrangementMonth).click({multiple:true});
              })
              }
              if(this.testdata.Person_details.find(compare).PaymentArrangementMethod==="Avtalegiro"){
                cy.get("#PaymentArrangementGrid\\/mandateStatus").click().then(()=>{
                  cy.wait(2000);
                  cy.get("body").find("vaadin-combo-box-overlay").not("hidden").eq(0).find("#selector").find("vaadin-combo-box-item").find("#content").contains("Open").click({multiple:true});
                })

              }
             
                    cy.get("#PaymentArrangementGrid\\/saveButton").click().then(()=>{
                      cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button",{timeout:100000}).click();
                    })
                    clientExist = false;
                 
               }
              
        })
           // cy.get("#mainNewBusiness\/mainDetails\/mainDetailsGPFCust\.retiremnt_Age_section > div.spml-row.spml-first-row > div:nth-child(2) > div > vaadin-button").click();

      
           
                   
            cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.button_7", { timeout: 100000 }).click({force:true});
           
           cy.insertText("#uiAgentSearchId\\/internalAgentID", "200006"); 
           // cy.insertText("#uiAgentSearchId\\/internalAgentID", "10001"); 
            cy.get("#uiAgentSearchId\\/searchButton", { timeout: 100000 }).click().wait(3000);
            cy.get("#uiAgentSearchId\\/table_17 > vaadin-grid-cell-content:nth-child(7)").dblclick().then(()=>{
              
            })
            cy.get("#uiAgentSearchId\\/select", { timeout: 100000, withinSubject:null }).click({force:true});
            cy.get('#mainNewBusiness\\/mainDetails\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/PolicyRolesNew\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/coverages\\/nextStepButton',{timeout:100000}).click();
              

  ///DELETE CONT TYPE ROWS

  cy.get('#mainNewBusiness\\/contributions\\/global\\.res\\.delRow', { timeout: 100000 }).click();
  cy.get('#mainNewBusiness\\/contributions\\/global\\.res\\.delRow', { timeout: 100000 }).click();
  cy.get('#mainNewBusiness\\/contributions\\/global\\.res\\.delRow', { timeout: 100000 }).click();
   //ADD NEW TYPE
   let const1 = this.testdata.Contributon.find(compare).ContributonType1;
   let const2 = this.testdata.Contributon.find(compare).ContributonType2;
   let const3 = this.testdata.Contributon.find(compare).ContributonType3;

   console.log("value:",const1);
   console.log("value:",const2);
   console.log("value:",const3);

   if(const1){
     cy.insertContType("#mainNewBusiness\\/contributions\\/contType",
       this.testdata.Contributon.find(compare).ContributonType1,
       this.testdata.Contributon.find(compare).Premium1,
       '[slot="vaadin-grid-cell-content-9"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/fundSelectionContLevel > .spml-addon-append > #mainNewBusiness\\/contributions\\/lookupButton_2',
       this.testdata.Contributon.find(compare).Fund_Profile_1,
       this.testdata.Contributon.find(compare).Assetclass_ProfileCategory_1,
       this.testdata.Contributon.find(compare).Investmentfund_Profilename_1,
       "100");
   }
        
  if(const2){
   cy.insertSingleType("#mainNewBusiness\\/contributions\\/contType",
   this.testdata.Contributon.find(compare).ContributonType2,
   this.testdata.Contributon.find(compare).Premium2,
   '[slot="vaadin-grid-cell-content-18"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/fundSelectionContLevel > .spml-addon-append > #mainNewBusiness\\/contributions\\/lookupButton_22',
   this.testdata.Contributon.find(compare).Fund_Profile_2,
   this.testdata.Contributon.find(compare).Assetclass_ProfileCategory_2,
   this.testdata.Contributon.find(compare).Investmentfund_Profilename_2,
   "100"
   )}

          
  if(const3){
   cy.insertTransferType("#mainNewBusiness\\/contributions\\/contType",
   this.testdata.Contributon.find(compare).ContributonType3,
   this.testdata.Contributon.find(compare).Premium3,
   '[slot="vaadin-grid-cell-content-27"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/fundSelectionContLevel > .spml-addon-append > #mainNewBusiness\\/contributions\\/lookupButton_22',
   this.testdata.Contributon.find(compare).Fund_Profile_3,
   this.testdata.Contributon.find(compare).Assetclass_ProfileCategory_3,
   this.testdata.Contributon.find(compare).Investmentfund_Profilename_3,
   "100"
   )}
   
   cy.get("#mainNewBusiness\\/contributions\\/saveButton").click({ force: true });

   cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-vertical-layout").find(".confirm-word-wrap", { timeout: 100000 }).invoke('text').then((text) => {

     var policyNum = text.split(" ")[2];

     cy.wrap(policyNum).as('policyNum');
     console.log(policyNum);
     cy.writeFile("C:\\Users\\g024068\\OneDrive - Gjensidige Forsikring ASA\\Dokumenter\\GitHub\\coresuiteauto\\coresuiteautooutput.txt",policyNum + " " + this.testdata.Person_details.find(compare).IDReference + " row: " + round + "\n"  ,{flag:'a'});
    //counter++;
    cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary",{timeout:100000}).click();
    cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.newBussines","Pre Active");

    
    cy.get('#mainNewBusiness\\/mainDetails\\/saveButton',{timeout:10000}).click();
    cy.wait(3000);
   cy.screenshot();
   })
           
  });
});
});



  