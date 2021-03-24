import { pages, sizes, scrubbedElements } from "../support/options";

describe("Visual regression tests", () => {
  sizes.forEach((size) => {
    pages.forEach((page) => {
      it(`Should match previous screenshot '${page} Page, when '${size}' resolution'`, () => {
        const now = new Date(Date.UTC(2019, 1, 1)).getTime();
        cy.clock(now);
        cy.setResolution(size);
        cy.visit(`/${page}`);
        // cy.matchImageSnapshot();
        cy.matchImageSnapshot({ blackout: scrubbedElements });
      });
    });
  });
});
  