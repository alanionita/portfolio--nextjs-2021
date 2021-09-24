import { sizes } from "../support/options";

const NO_POSTS = 10

describe("Visual regression on /posts/{id}", () => {
  sizes.forEach((size) => {
    it(`Should match previous screenshot blog Page, when '${size}' resolution'`, () => {
      cy.visit("/blog");
      cy.get("ul > li > a").should("have.length", NO_POSTS);
      cy.get("ul > li > a").each(($element) => {
        cy.wrap($element)
          .invoke("attr", "href")
          .then((href) => {
            cy.wrap(href).should("exist")
            cy.visit(href);
            cy.wait(2000);
          });
      });
    });
    it(`All posts should have the correct url`, () => {
      cy.visit("/blog");
      cy.get("ul > li > a").each(($element) => {
        cy.wrap($element).should("have.attr", "href").and("include", "posts")
      });
    });
  });
});
