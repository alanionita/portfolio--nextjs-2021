const sizes = [
  ["iphone-6", "landscape"],
  "iphone-6",
  "ipad-2",
  ["ipad-2", "landscape"],
  [1920, 1080],
];

const pages = ["", "blog", "posts/pi-os-study"];

describe("Visual regression tests", () => {
  it("Should match the homepage", () => {
    cy.visit("/");
    cy.matchImageSnapshot();
  });
  sizes.forEach((size) => {
    pages.forEach((page) => {
      it(`Should match previous screenshot '${page} Page, when '${size}' resolution'`, () => {
        cy.setResolution(size);
        cy.visit(`/${page}`);
        cy.matchImageSnapshot();
      });
    });
  });
});
