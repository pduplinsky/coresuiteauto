import { beforeEach } from "mocha";


describe("Our first suite",()=>{

    beforeEach("Execute before each test",()=>{

    });

    it("Our first test",()=>{
        cy.visit("https://gjensidige-coresuite-sit.sapiensmgs.com/coresuite_pl/coresuite");
        cy.get('#user\\.name').find("input").type("Clerk");
        cy.get('#user\\.password').find("input").type("a");

        cy.get('#login-combo').click().then(()=>{
            cy.get("#overlay").find("#content").contains("GPF_SIT_Automation").click();
        })

        cy.get("#login\\.button").click();
        
    });

 
})



























// import { CustomCypress } from '../support/commands';


// describe("Our first suite",() =>{


//     beforeEach("Logs in before each test",() =>{ 

//     })

//     it("First test", ()=>{ 


//     });
    
//     it("Second test", ()=>{ 
        
//     });
    
//     it("Third test", ()=>{ 
        
//     });

// });












    //    cy.visit("https://gjensidige-coresuite-sit.sapiensmgs.com/coresuite_pl/coresuite");
