import { sizes } from "../support/options";

const NO_POSTS = 10
const A_ELEMENTS = 'aElements'
const UL_ELEM = 'ulElement'

describe("Blog: visual regression tests", () => {
  beforeEach(() => {
    cy.visit({
      url: "/blog",
      method: 'GET',
    })
    cy.get('[data-type="url-list"]').as(UL_ELEM)
    cy.get('[data-type="url"]').as(A_ELEMENTS)
    
  })
  it(`Posts list length should be correct amount`, () => {
    cy.get(`@${UL_ELEM}`).children().should("have.length", NO_POSTS);
  });
  it(`Each post should have valid href`, () => {
    cy.get(`@${A_ELEMENTS}`).each(($element) => {
      cy.wrap($element).should("have.attr", "href").and("include", "posts")
    });
  });
  // sizes.forEach((size) => {
  //   it(`Match screenshot on ${size}`, () => {
  //     cy.visit({
  //       url: "/blog",
  //       method: 'GET',
  //     })
  //     cy.get('[data-type="url"]').each(($element) => {
  //       cy.wrap($element)
  //         .invoke("attr", "href")
  //         .then((href) => {
  //           cy.visit(href);
  //           cy.wait(1000);
  //         });
  //     });
  //   });
  // });
});
