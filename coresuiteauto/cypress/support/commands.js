import { find } from "lodash";

Cypress.Commands.add("login",(user,pwd,db) => {
//cy.visit("https://gjensidige-coresuite-uat-integration.sapiensmgs.com/coresuite_pl/coresuite");

cy.visit("https://gjensidige-coresuite-uat-integration.sapiensmgs.com/coresuite_pl/coresuite");
    cy.insertText("#user\\.name",user);
    cy.insertText("#user\\.password",pwd);
    cy.selectFromDropdown('#login-combo',db);
    cy.get("#login\\.button").click();
    cy.wait(2000);
});

Cypress.Commands.add("selectFromDropdownTest",(selector,valueToPick) => {
  cy.get(selector).click().then((slt)=>{
 
        cy.get("#overlay").find("#content").find("#scroller").first().then((scr)=>{
        
          let i = 0;
      cy.wrap(scr).find("#content").each((item)=>{
        
        i++;
        cy.wrap(scr).scrollTo(0,500*i)/
        cy.wait(100);  
        console.log(item.text);
        if(item.text===valueToPick){
          cy.wrap(item).click();
        }

       }
       );
       cy.wrap(scr).contains(valueToPick).click();
      })

  })
     

});



Cypress.Commands.add("selectFromDropdown",(selector,valueToPick) => {
  cy.get(selector,{timeout:10000}).click().then(dropdown => {
  cy.wrap(dropdown).get("#content",{force:true,timeout:20000}).contains(valueToPick,{timeout:20000}).click({force:true,multiple:true});
});
});

Cypress.Commands.add("selectFromDropdownMultiple",(selector,valueToPick) => {
  cy.get(selector,{timeout:10000}).click().then(() => {
    cy.wait(2000);
  cy.get("#content",{force:true,timeout:20000}).contains(valueToPick,{timeout:20000}).click({force:true,multiple:true});
});
});





Cypress.Commands.add("insertDate", (selector,valueToInsert)=> {
  cy.get(selector).find("input").type(valueToInsert, {force: true});

});

Cypress.Commands.add("clickOn",(selector)=> {
  cy.get(selector,{ timeout: 100000 }).should('be.visible').click();
  });

Cypress.Commands.add("insertText", (selector,valueToInsert)=> {
  cy.wait(1000);
    cy.get(selector).find("input",{ timeout: 100000 }).should('be.visible').type(valueToInsert);
});




Cypress.Commands.add("insertContType", (selector,contributionType, Premium,lookupSelector,selectFunds,profileCategory, investmentProfileName,allocationPercent)=> {

  cy.get('#mainNewBusiness\\/contributions\\/button2',{timeout:100000}).click({timeout:100000}).then(()=>{
    cy.get("#mainNewBusiness\\/contributions\\/section_26").find(selector).find("#input").click({multiple:true}).then(()=>{
   
     cy.get("#overlay").find("vaadin-combo-box-item",{force:true,timeout:20000,multiple:true}).find("#content").contains(contributionType,{timeout:20000,multiple:true}).click({force:true,multiple:true}).then(()=>{
  cy.wait(3000);
     cy.get("#overlay").find("#mainNewBusiness\\/contributions\\/premiumForLayer").find("input").type(Premium,{force:true});

    cy.get("#main\\.conts_lightbox_done").click({force:true});
     });

    })

    cy.get(lookupSelector, { timeout: 100000 }).click();

    //ADD FUNDS
    cy.get("#uiFunds\\/uiFundsGpfCust\\.addedItem", { timeout: 100000 }).click();
    cy.get("#uiFunds\\/uiFundsGpfCust\\.fundProfile", { timeout: 100000 }).click().then(dropdown => {
      cy.wrap(dropdown).get("#content").find("[part='content']").contains(selectFunds).click({ force: true });
      cy.get("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund", { timeout: 100000 }).click();
      cy.wait(1000);
      cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund",profileCategory);
      cy.get("#uiFunds\\/uiFundsGpfCust\\.investmentName1", { timeout: 100000 }).click();
      cy.wait(1000);
      cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.investmentName1", investmentProfileName);
      //cy.screenshot();
   //   cy.get("#uiFunds\\/paymentFundsTable > vaadin-grid-cell-content:nth-child(30)").find("input").focus().clear({ force: true }).type(allocationPercent, { force: true });
      cy.get("#uiFunds\\/autoBalance",{timeout:10000}).click();
    });
    cy.get("#uiFunds\\/okButton", { timeout: 100000 }).click();
  })
}) 

  Cypress.Commands.add("insertSingleType", (selector,contributionType, Premium,lookupSelector,selectFunds,profileCategory, investmentProfileName,allocationPercent)=> {
    cy.get('#mainNewBusiness\\/contributions\\/button2',{timeout:100000}).click({timeout:100000}).then(()=>{
      cy.get("#mainNewBusiness\\/contributions\\/section_26").find(selector).find("#input").click({multiple:true}).then(()=>{
     
       cy.get("#overlay").find("vaadin-combo-box-item",{force:true,timeout:20000,multiple:true}).find("#content").contains(contributionType,{timeout:20000,multiple:true}).click({force:true,multiple:true});
      })
      cy.get("#main\\.conts_lightbox_done").click().then(()=>{


        cy.get("#mainNewBusiness\\/contributions\\/contType_2").dblclick().then(()=>{
          cy.insertText("#mainNewBusiness\\/contributions\\/premiumForLayer_1",Premium);
          cy.get("#contLayers_lightbox_done",{timeout:100000}).click();
     
      });
    });

      cy.get("#mainNewBusiness\\/contributions\\/contLayerTable",{timeout:100000}).find("#mainNewBusiness\\/contributions\\/precent_2").find("#mainNewBusiness\\/contributions\\/lookupButton_22").click();
      
      cy.get("#uiFunds\\/uiFundsGpfCust\\.addedItem", { timeout: 100000 }).click();
      cy.get("#uiFunds\\/uiFundsGpfCust\\.fundProfile", { timeout: 100000 }).click().then(dropdown => {
        cy.wait(2000);
        cy.wrap(dropdown).get("#content").find("[part='content']").contains(selectFunds).click({ force: true });
        cy.get("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund", { timeout: 100000 }).click();
        cy.wait(1000);
        cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund",profileCategory);
        cy.get("#uiFunds\\/uiFundsGpfCust\\.investmentName1", { timeout: 100000 }).click();
        cy.wait(1000);
        cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.investmentName1", investmentProfileName);
      //  cy.screenshot();

       // cy.get("#uiFunds\\/paymentFundsTable > vaadin-grid-cell-content:nth-child(30)").find("input").focus().clear({ force: true }).type(allocationPercent, { force: true });
       cy.get("#uiFunds\\/autoBalance",{timeout:10000}).click();

      });
      cy.get("#uiFunds\\/okButton", { timeout: 100000 }).click();
    })
  });
  

  Cypress.Commands.add("insertTransferType", (selector,contributionType, Premium,lookupSelector,selectFunds,profileCategory, investmentProfileName,allocationPercent)=> {
    cy.get('#mainNewBusiness\\/contributions\\/button2',{timeout:100000}).click({timeout:100000}).then(()=>{
      cy.get("#mainNewBusiness\\/contributions\\/section_26").find(selector).find("#input").click({multiple:true}).then(()=>{
     
       cy.get("#overlay").find("vaadin-combo-box-item",{force:true,timeout:20000,multiple:true}).find("#content").contains(contributionType,{timeout:20000,multiple:true}).click({force:true,multiple:true});
      })
      cy.get("#main\\.conts_lightbox_done").click().then(()=>{

        cy.get("#mainNewBusiness\\/contributions\\/contType_2").dblclick().then(()=>{
          cy.insertText("#mainNewBusiness\\/contributions\\/premiumForLayer_1",Premium);
          cy.get("#contLayers_lightbox_done").click();
     
      });
    });
 

    cy.get("#mainNewBusiness\\/contributions\\/contLayerTable",{timeout:100000}).find("#mainNewBusiness\\/contributions\\/precent_2").find("#mainNewBusiness\\/contributions\\/lookupButton_22").click();
      
      cy.get("#uiFunds\\/uiFundsGpfCust\\.addedItem", { timeout: 100000 }).click();
      cy.get("#uiFunds\\/uiFundsGpfCust\\.fundProfile", { timeout: 100000 }).click().then(dropdown => {
        cy.wrap(dropdown).get("#content").find("[part='content']").contains(selectFunds).click({ force: true });
        cy.get("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund", { timeout: 100000 }).click();
        cy.wait(1000);
        cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.profileCategory1Fund",profileCategory);
        cy.get("#uiFunds\\/uiFundsGpfCust\\.investmentName1", { timeout: 100000 }).click();
        cy.wait(1000);
        cy.selectFromDropdown("#uiFunds\\/uiFundsGpfCust\\.investmentName1", investmentProfileName);
  
        //cy.get("#uiFunds\\/paymentFundsTable > vaadin-grid-cell-content:nth-child(30)").find("input").focus().clear({ force: true }).type(allocationPercent, { force: true });
        cy.get("#uiFunds\\/autoBalance",{timeout:10000}).click();

      });
      cy.get("#uiFunds\\/okButton", { timeout: 100000 }).click();
    }) 
  
  });


