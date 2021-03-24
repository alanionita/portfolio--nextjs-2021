import { sizes } from "../support/options";

describe("Visual regression on /posts/{id}", () => {
  sizes.forEach((size) => {
    it(`Should match previous screenshot blog Page, when '${size}' resolution'`, () => {
      cy.visit("/blog");
      // cy.get(`ul`)
      //   // .should("have.length", 9)
      //   .children()
      //   .toArray()
      //   .forEach((el) => {
      //     el.click();
      //     cy.wait(1000);

      cy.get("ul > li > a")
        .should("have.length", 9)
        .each((element) => {
          cy.wrap(element)
            .invoke("attr", "href")
            .then((href) => {
              cy.visit(href);
            });
          cy.wrap(element)
          .should("have.attr", "href")
          .and("include", "posts"  
          cy.wait(1000);
        });
    });
  });
});
