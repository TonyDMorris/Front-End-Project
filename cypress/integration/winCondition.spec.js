describe("winCondition", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/create");
  });
  it("check text win condition functionality", () => {
    cy.get("[data-cy=text-condition-button]").click();
    cy.get("[data-cy=text-condition-input").should("be.visible");
    cy.get("[data-cy=img-condition-input").should("not.be.visible");
    cy.get("[data-cy=gps-condition-input").should("not.be.visible");
  });
  it("check image win condition functionality", () => {
    cy.get("[data-cy=img-condition-button]").click();
    cy.get("[data-cy=img-condition-input").should("be.visible");
    cy.get("[data-cy=text-condition-input").should("not.be.visible");
    cy.get("[data-cy=gps-condition-input").should("not.be.visible");
  });
  it("check image win condition functionality", () => {
    cy.get("[data-cy=gps-condition-button]").click();
    cy.get("[data-cy=gps-condition-input").should("be.visible");
    cy.get("[data-cy=img-condition-input").should("not.be.visible");
    cy.get("[data-cy=text-condition-input").should("not.be.visible");
  });
});
