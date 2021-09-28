import { xorBy } from 'lodash';
import { CustomCypress } from '../support/commands';

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

        it("Loop Through test data", function () {
          //  Cypress.Cookies.defaults({ preserve: /.*/ });
          this.testdata.Test_data_ID.forEach((data) => {
            cy.clearCookies();
            const compare = item => item.Test_data_ID === data.Test_data_ID;
            //Login
            cy.login();
            cy.get('#shell\\/menu\\/menu\\.new', { timeout: 100000 }).click();
            cy.get("#shell\\/menu\\/newApplication", { timeout: 100000 }).click();

            //  it("fills Main details",function() {
            //cy.log(this.testdata).debug();

            // Cypress.Cookies.defaults({ preserve: /.*/ });

            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.company", this.testdata.Main_details.find(compare).Brand);
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.product", this.testdata.Main_details.find(compare).Product);
            cy.wait(3000);
            cy.selectFromDropdown("#vaadin-text-field-input-7 > slot:nth-child(2) > input", this.testdata.Main_details.find(compare).Source)
            cy.insertText("#vaadin-text-field-input-35", this.testdata.Person_details.find(compare).person_id);
            cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.allInsured", this.testdata.Main_details.find(compare).Role);

            //         });

            cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.payer", { timeout: 100000 }).click();
            //cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.owner",{timeout:100000}).click();
            cy.selectFromDropdownTest("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.retirementAge", "73");
          
            cy.get("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.button_7", { timeout: 100000 }).click({force:true});
            cy.insertText("#uiAgentSearchId\\/internalAgentID", "10001");
            cy.get("#uiAgentSearchId\\/searchButton", { timeout: 100000 }).click().wait(3000);
            cy.get("#uiAgentSearchId\\/table_17 > vaadin-grid-cell-content:nth-child(7)").dblclick();
            cy.get("#uiAgentSearchId\\/select", { timeout: 100000 }).click();
            //  cy.insertText("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.mainDetails\\.agentID","10001").wait(3000);
            // });
            // it("skips policy roles screen",function() {
            // Cypress.Cookies.defaults({ preserve: /.*/ });
            cy.get('#mainNewBusiness\\/mainDetails\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/PolicyRolesNew\\/global\\.res\\.hexNext', { timeout: 100000 }).click();
            // });
            // it("Setup policy contributions", function(){
            //Cypress.Cookies.defaults({ preserve: /.*/ });
            cy.get('[slot="vaadin-grid-cell-content-19"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/contType', { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/contributions\\/global\\.res\\.delRow', { timeout: 100000 }).click();
            cy.get("#mainNewBusiness\\/contributions\\/table_22 > vaadin-grid-cell-content:nth-child(24)", { timeout: 100000 }).click();
            cy.get('#mainNewBusiness\\/contributions\\/global\\.res\\.delRow', { timeout: 100000 }).click();
            cy.get('[slot="vaadin-grid-cell-content-1"] > flow-component-renderer > #mainNewBusiness\\/contributions\\/contType', { timeout: 100000 }).click();
            //});
            // it("setups funds",function() {
            //  Cypress.Cookies.defaults({ preserve: /.*/ });
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
            // });
            // it("saves policy and store policy number",function() {
            // Cypress.Cookies.defaults({ preserve: /.*/ });
            cy.get("#mainNewBusiness\\/contributions\\/saveButton").click({ force: true });

            // cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-vertical-layout > span:nth-child(1)").invoke('text').as("PolicyText");
            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-vertical-layout > span:nth-child(1)", { timeout: 100000 }).invoke('text').then((text) => {

              var policyNum = text.split(" ")[2];

              cy.wrap(policyNum).as('policyNum');
              // console.log(policyNum.split(" ")[2]);
            });

            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary").click();
            cy.get("#user\\.button").click();
            cy.get("#logout\\.button").click();
            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary").click();
        


                               cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary",{timeout:100000}).click({force:true});

                              //new payment
                              cy.get('#shell\\/menu\\/menu\\.payment').click({force:true});
                              cy.get("#shell\\/menu\\/paymentsBatch",{timeout:100000}).click();
                              cy.get("#shell\\/menu\\/newPaymentBatch",{timeout:100000}).click();
                             // cy.get("#NewPaymentBatch\\/batch_status").click({force:true});
                              cy.selectFromDropdown("#NewPaymentBatch\\/batch_status","Ready for validation");
                              cy.selectFromDropdown("#NewPaymentBatch\\/paymentMethodId","Giro");
                              cy.insertText("#NewPaymentBatch\\/cashrecieved","1500");
                               cy.selectFromDropdown("#NewPaymentBatch\\/accountShortCode","Payment IN (KID)");
                              cy.get("#NewPaymentBatch\\/global\\.res\\.addRow",{timeout:100000}).click();
                              cy.wait(5000);


                              cy.get("#NewPaymentBatch\\/lookupButton").click({multiple:true, force: true});

                              cy.get("@policyNum").then( (pNum) => {
                                cy.insertText("#uiPolicyLookup\\/PolicyLookup\\.policyNo",pNum);
                              })


                              cy.get("#uiPolicyLookup\\/PolicyLookup\\.retrieve1",{timeout:100000}).click();
                              cy.get("#uiPolicyLookup\\/policyName").dblclick(); 

                              cy.get("#NewPaymentBatch\\/destkeyidNotApp").dblclick();
                              cy.wait(5000);

                                cy.get("#NewPaymentBatch\\/destSecondaryKeyList").filter("vaadin-combo-box").then(dropdown => {
                                  cy.wrap(dropdown,{timeout:100000}).click().wait(4000).get("vaadin-combo-box-overlay").find("vaadin-combo-box-item").find("#content").contains("Regular",{timeout:100000}).click(); 
                                }); 

                            cy.get("#vaadin-text-field-input-161 > slot:nth-child(2) > input").type("1500");
                              cy.get("#paymentTableLabel_lightbox_done",{timeout:100000}).click();

                              cy.get("@policyNum").then(wags => {
                                cy.get("#vaadin-text-field-input-129 > slot:nth-child(2) > input").type("RT" + wags, {force:true});
                                  cy.get("#NewPaymentBatch\\/saveButton",{timeout:100000}).click();
                              });
                            // });

                      //  it("Saves a payment and check's it's set as \"Money in Suspense\" ",function() {
                              Cypress.Cookies.defaults({ preserve: /.*/ });
                              cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > label",{timeout:100000}).should("have.text","Saved successfully.",{timeout:100000});
                              cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout").find("#button",{timeout:100000}).click({force:true,multiple:true});
                              cy.get("#NewPaymentBatch\\/cancelButton",{timeout:100000}).click();
                              cy.get("#shell\\/summary\\/link_0_0").should("have.text","Money in Suspense");
                              cy.selectFromDropdown("#mainNewBusiness\\/mainDetails\\/mainDetailsGPFCust\\.newBussines","Pre Active");
                              cy.get("#mainNewBusiness\\/mainDetails\\/saveButton",{timeout:100000}).click();
                              cy.wait(5000);
                        //  });
                        //  it("Checks if the policy is set into status Inforce ",function() {
                            Cypress.Cookies.defaults({ preserve: /.*/ });
                            cy.wait(2000);
                            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > div",{timeout:100000}).should("have.text","Policy status is Inforce");
                            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout").find("#button",{timeout:100000}).click();
                      //  });


                      // it("Unit Dealing Process -> Run Unit Dealing Audit",function() {
                      // Cypress.Cookies.defaults({ preserve: /.*/ });
                      cy.get("#shell\\/menu\\/controlPanel",{timeout:100000}).click();
                      cy.get("#shell\\/menu\\/batch",{timeout:100000}).click();
                      cy.selectFromDropdown("#Batch\\/batch\\.batchName","Unit Dealing (Testing)");
                      cy.get("#Batch\\/batch\\.deselectAll",{timeout:100000},{timeout:100000}).click({force:true});
                      cy.get("#Batch\\/table_26 > vaadin-grid-cell-content:nth-child(3)",{timeout:100000}).click({force:true});

                      cy.get("#Batch\\/batch\\.run",{timeout:100000}).click();
                      cy.get("#Batch\\/batch\\.retrieve",{timeout:100000}).click();
                      //cy.get("#Batch\\/table_14 > vaadin-grid-cell-content:nth-child(10)").find("#Batch\\/t_type").should("have.text","End");
                      cy.get("#Batch\\/cancelButton",{timeout:100000}).click();
                      //  });

                      // it("Investments - Unit deals", function() {
                      // Cypress.Cookies.defaults({ preserve: /.*/ });
                      cy.get("div > vaadin-menu-bar-button:nth-child(4)").click({force:true});
                      cy.get("#shell\\/menu\\/menu\\.investmentManagement\\.unitDealingExecution",{timeout:100000}).click();
                      cy.get("#UnitDealingQuery\\/searchButton").click({force:true});

                      cy.get("#UnitDealingQuery\\/colOrderReference",{timeout:100000}).invoke("text").then((text) => {
                          
                        cy.wrap(text).as('orderReference');
                      })


                      cy.selectFromDropdown("#UnitDealingQuery\\/searchResultstable > vaadin-grid-cell-content:nth-child(16)","Sent");
                      cy.get("#UnitDealingTabs\\/saveButton",{timeout:100000}).click();

                      cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > label").should("have.text","Saved successfully.");

                      cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout").find("#button",{timeout:100000}).click();
                      cy.get("#UnitDealingTabs\\/multiview > div.spml-multiview-label-and-tabs > vaadin-tabs > vaadin-tab:nth-child(2)",{timeout:100000}).click({force:true});


                      cy.get("#alis-content-spml > div > vaadin-split-layout > div:nth-child(1) > div.views-placeholder > div > div").find("#UnitDealingQuery\\/searchButton").click({force:true,multiple:true});
                     


                      cy.get("@orderReference").then((order) => {
                      cy.get("#UnitDealingTabs\\/contractNote").find("#UnitDealingQuery\\/searchResultsSection").find("#UnitDealingQuery\\/searchResultstable").find("#table").scrollTo("bottom").then(()=>{
                        cy.get("#UnitDealingTabs\\/contractNote").find("#UnitDealingQuery\\/searchResultsSection").find("#UnitDealingQuery\\/searchResultstable").find("vaadin-grid-cell-content").contains(parseInt(order)).dblclick({force:true,timeout:10000}).then(()=>{
                         

                      })
                   
                    })
                             });
                             cy.get("#UnitDealingQuery\\/colDetailFundNo").trigger("click");
                             cy.get("#instructionDetailsView_openLightbox").click();
                      
                             
//cy.get("#UnitDealingQuery\\/instructionDetailsView").find("#button").first().click();

                    //  cy.get("#UnitDealingQuery\\/detailsForm").find("#UnitDealingQuery\\/colDealingStatus").click();
                      
                    //  // cy.get("#UnitDealingQuery\\/detailsForm").find("#UnitDealingQuery\\/colDealingStatus").
                   
                    //   cy.insertText("#UnitDealingQuery\\/actualUnitPrice","1115");
                    //   cy.insertText("#UnitDealingQuery\\/actualFundMonetaryAmount","2500");
                    //   cy.get("#instructionDetailsView_lightbox_done",{timeout:100000}).click();
                    //   cy.get("#UnitDealingTabs\//saveButton",{timeout:100000}).click();
                    //   //cancel
                    //   cy.get("#shell\\/menu\\/controlPanel",{timeout:100000}).click();
                    //   cy.get("#shell\\/menu\\/changeDate",{timeout:100000}).click();
                    //   cy.get("#vaadin-date-picker-text-field-input-696 > slot:nth-child(2) > input").type("01.03.2021");
                    //   cy.get("#vaadin-date-picker-text-field-input-697 > slot:nth-child(2) > input").type("01.09.2021");
                    //   cy.get("#vaadin-date-picker-text-field-input-698 > slot:nth-child(2) > input").type("26.02.2021");

                    //   cy.get("#shell\\/menu\\/controlPanel",{timeout:100000}).click();
                    //   cy.get("#shell\\/menu\\/batch",{timeout:100000}).click();
                    //   cy.selectFromDropdown("#Batch\\/batch\\.batchName","Unit Dealing (Testing)");
                    //   cy.get("#Batch\\/batch\\.deselectAll").click().guard
                    //   cy.get("#Batch\\/table_26 > vaadin-grid-cell-content:nth-child(5)").click();
                    //   cy.get("#Batch\\/table_26 > vaadin-grid-cell-content:nth-child(7)").click();
                    //   cy.get("#Batch\\/batch\\.run").click();
                    //   cy.get("#Batch\\/batch\\.retrieve").click();
                    //   cy.get("#Batch\\/cancelButton").click();

                    //   //});



            //      })

            // //Loop it ends
            // });

            // });

            cy.get("#mainNewBusiness\\/mainDetails\\/cancelButton").click();
            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary").click();


            cy.get("#user\\.button").click();
            cy.get("#logout\\.button").click();
            cy.get("#overlay > flow-component-renderer > div > vaadin-vertical-layout > vaadin-horizontal-layout > vaadin-button.spml-primary").click();
           
            cy.clearCookies();

          })
        });
      });
