/// <reference types="cypress" />


describe('Employee Checkin', function () {

    it('daily checkin', function () {
        cy.visit('https://erp.atriina.com/login#login');
        cy.get('#login_email').type(Cypress.env('EMAIL'), { log: false });
        cy.get('#login_password').type(Cypress.env('PASSWORD'), { log: false });
        cy.get('.btn-login').contains('Login').click();
        cy.get('#navbar-search').click().clear().type("Checkin");
        cy.get('ul > li').contains('Employee Checkin List').click();

        cy.get('button[title="Clear all filters"]').click();
        cy.get('button[title="0 Filter Applied"]').click();

        cy.get('.fieldname-select-area > .awesomplete > .form-control').as('filterTextBox');
        cy.get('@filterTextBox').clear().type('Created On{enter}');

        cy.get('input[data-fieldtype="DateRange"]').click();

        cy.get('.-current-', { timeout: 5000 }).last().click({ force: true });
        cy.get('.-selected-', { timeout: 5000 }).first().click({ force: true });

        cy.get('.add-filter').contains("+ Add a Filter").click();

        cy.get('.filter-area > .filter-edit-area .filter-box')
            .eq(1)
            .within(() => {

                cy.get('.list_filter > .fieldname-select-area')
                    .clear()
                    .type('Log Type {Enter}');

                cy.get('select[data-fieldtype="Select"]').select("OUT");

            });


        cy.get('.apply-filters').click();

        cy.get('[placeholder="Employee Name"]').type("NIKHIL");

        cy.wait(5000);
        cy.get('.list-count').invoke('text').then((text) => {
            if (text == "0 of 0") {
                cy.log("Need to CheckOut");
                CheckOUTERP();
                cy.wait(3000);

            }
        });

        cy.get('.nav-link > .avatar-medium > .avatar-frame').click();
        cy.get('[onclick="return frappe.app.logout()"]').click();


    });




});


function CheckOUTERP() {
    cy.get('button[data-label="Add Employee Checkin"]').click();
    cy.get('input[data-fieldname="employee"]').click().clear().type("HR-EMP-00022"); // NIKHIL 
    cy.get('ul > li').contains('Nikhil Madhav Bhosle').click();
    cy.get('select[data-doctype="Employee Checkin"]').select("OUT");
    // cy.get('button[data-label="Save"]').click();
}