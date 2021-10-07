describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("Tuesday", () => {
    cy.visit("/");
    cy.get("li").contains("Tuesday").click();
  });
  it("should see backgroundcolor", () => {
    cy.contains("li", "Tuesday")
      .click()
      .should("have.css", "background-color", "rgb(242, 242, 242)");
  });
  it("should navigate to Tuesday", () => {
    cy.visit("/");
    cy.get("[data-testid=Tuesday]")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
