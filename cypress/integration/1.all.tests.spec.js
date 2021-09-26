import { pages, sizes, scrubbedElements } from "../support/options";

describe("All: visual regression tests", () => {
  sizes.forEach((size) => {
    pages.forEach((page) => {
      context(`Test ${page} on ${size}`, () => {
        beforeEach(() => {
          if (Array.isArray(size)) {
            cy.viewport(...size) 
          } else {
            cy.viewport(size) 
          }
        })
    
        it(`Should match snapshot`, () => {
          cy.visit(`/${page}`);
          cy.matchImageSnapshot({ blackout: scrubbedElements });
        });
      })
    });
  });
});
  