const pages = ["", "blog", "posts/pi-os-study"];


describe("Visual regression tests", () => {
  it("Should match the homepage", () => {
    cy.visit("/");
    cy.matchImageSnapshot();
  });
  pages.forEach((page) => {
    it(`Should match previous screenshot '${page} Page'`, () => {
      cy.visit(`/${page}`);
      cy.matchImageSnapshot();
    });
  });
});
