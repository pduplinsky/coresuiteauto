
Cypress.Commands.add("login",() => {
    cy.visit("https://gjensidige-coresuite-sit.sapiensmgs.com/coresuite_pl/coresuite");
    cy.insertText("#user\\.name","Clerk");
    cy.insertText("#user\\.password","a");
    cy.selectFromDropdown('#login-combo',"GPF_SIT_Automation");
    cy.get("#login\\.button").click();
    cy.wait(2000);
});

Cypress.Commands.add("selectFromDropdownTest",(selector,valueToPick) => {

  // if(cy.get("body").children("#overlay").find("#scroller").length < 1){
  //   cy.get("#content",{force:true}).contains(valueToPick).click({force:true,multiple:true});
  // }
    
  cy.get(selector).click().then((slt)=>{
 
        cy.get("#overlay").find("#content").find("#scroller").first().then((scr)=>{
        
          let i = 0;
      cy.wrap(scr).find("#content").each((item)=>{
        
        i++;
        cy.wrap(scr).scrollTo(0,500*i)
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
  cy.get(selector).click().then(dropdown => {
  cy.wrap(dropdown).get("#content",{force:true,timeout:20000}).contains(valueToPick,{timeout:20000}).click({force:true,multiple:true});
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

