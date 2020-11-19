describe("Conduit Login", () => {
  it("Login success", () => {
    cy.login("testcypress@testcypress.com", "testcypress");
    cy.get(".nav-item:nth-child(4) > .nav-link").click();
    cy.get(".btn:nth-child(5)").click();
    cy.url().should("contain", "/settings");
  });
});
