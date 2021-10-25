import { CustomCypress } from '../support/commands';


describe("Our first suite",() =>{


    beforeEach("Code that's run before each test",() =>{
        //repetitive code - ex. Login 


    });

    it("Login", ()=>{ 
        cy.visit("https://gjensidige-coresuite-sit.sapiensmgs.com/coresuite_pl/coresuite");
        cy.get('#user\\.name').find("input").type("User");
        cy.get("#user\\.password").find("input").type("password");
        
        cy.get("#login-combo").click().then(()=>{
           cy.get("#overlay").find("#content").contains("GPF_SIT_Automation").click();
        });
        cy.get("#button").click({multiple:true});

    });
    
    it("Second test", ()=>{ 
        
    });
    
    it("Third test", ()=>{ 
        
    });

});
