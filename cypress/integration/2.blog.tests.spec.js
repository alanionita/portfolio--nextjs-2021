import { sizes } from "../support/options";

const NO_POSTS = 10

describe("Blog: visual regression tests", () => {
  it(`Posts list length should be correct amount`, () => {
    cy.visit("/blog");
    cy.get("ul > li > a").should("have.length", NO_POSTS);
  });
  it(`Each post should have valid href`, () => {
    cy.visit("/blog");
    cy.get("ul > li > a").each(($element) => {
      cy.wrap($element).should("have.attr", "href").and("include", "posts")
    });
  });
  sizes.forEach((size) => {
    it(`Match screenshot on ${size}`, () => {
      cy.visit("/blog");
      cy.get("ul > li > a").each(($element) => {
        cy.wrap($element)
          .invoke("attr", "href")
          .then((href) => {
            cy.visit(href);
            cy.wait(1000);
          });
      });
    });
  });
});
