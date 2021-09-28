// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')

// before(' Load and read ', () => {
//     cy.task('readXlsx', { file: './cypress/fixtures/input.xlsx' }).then((rows) => {
//          Cypress.env('newApplication_company') = [4][0];
//          Cypress.env('newApplication_product') = [4][1];
//          Cypress.env('newApplication_source') = [4][2];
//          Cypress.env('newApplication_allInsured') = [4][3];
//          Cypress.env('newApplication_isPayer') = [4][4];
//          Cypress.env('newApplication_isOwner') = [4][5];
//          Cypress.env('newApplication_retirementAge') = [4][6];
//          Cypress.env('newApplication_agentID') = [4][7];
//          Cypress.env('setupContribution_premiumKr') = [4][8];
//          Cypress.env('fundsSetup_profile') = [4][9];
//          Cypress.env('fundsSetup_profileCategory') = [4][10];
//          Cypress.env('fundsSetup_profileName') = [4][11];
//          Cypress.env('fundsSetup_allocation') = [4][12];
//          Cypress.env('paymentTable_SecondaryKey') = [4][13];
//          Cypress.env('paymentTable_AmountKr') = [4][14];
        
//         // expect(rows[0]["column name"]).to.equal(11060)
// })});

// afterEach(() => {
//     //Code to Handle the Sesssions in cypress.
//     //Keep the Session alive when you jump to another test
//     let str') = [];
//     cy.getCookies().then((cook) => {
//         cy.log(cook);
//         for (let l = 0; l < cook.length; l++) {
//             if (cook.length > 0 && l == 0) {
//                 str[l] = cook[l].name;
//                 Cypress.Cookies.preserveOnce(str[l]);
//             } else if (cook.length > 1 && l > 1) {
//                 str[l] = cook[l].name;
//                 Cypress.Cookies.preserveOnce(str[l]);
//             }
//         }
//     })});
// Alternatively you can use CommonJS syntax:
// require('./commands')
