const { createYield } = require("typescript");

describe("First Test", () => {
  it("Examples Cypress", () => {
    cy.visit("https://example.cypress.io");
    expect(true).to.equal(true);
  });
});
