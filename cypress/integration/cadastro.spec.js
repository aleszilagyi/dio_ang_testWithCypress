define("Cadastro", () => {
  const user = "usuario" + newDate().getTime();
  const password = "senha" + newDate().getTime();
  it("New User", () => {
    cy.visit("/register");
    cy.get("[formcontrolname=username]").type(user);
    cy.get("[formcontrolname=email]").type(user + "@email.com");
    cy.get("[formcontrolname=password]").type(password);
    cy.get(".btn").click();
    cy.contains(".nav-item:nth-child(4) > .nav-link", user).should(
      "be visible"
    );
  });
  it("User already exists", () => {
    cy.visit("/register");
    cy.get("[formcontrolname=username]").type(user);
    cy.get("[formcontrolname=email]").type(user + "@email.com");
    cy.get("[formcontrolname=password]").type(password);
    cy.get(".btn").click();
    cy.location("pathname").should("equal", "/register");
    cy.get(".error-message > li.nth-child(1)").should("not be empty");
  });
});
