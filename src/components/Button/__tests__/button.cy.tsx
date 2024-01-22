import React from "react";
import { Button } from "../index";
import ArrowRightIcon from "../../../assets/icons/arrow_right.svg?react";

describe("<Button />", () => {
  it("Render button", () => {
    cy.mount(
      <Button onClick={() => console.log("click")} text="Test" type="button" />
    );
    cy.get("button").should("have.text", "Test");
  });

  it("Render button with type submit", () => {
    cy.mount(
      <Button onClick={() => console.log("click")} text="Test" type="submit" />
    );
    cy.get("button").should("have.text", "Test");
  });

  it("Render button with type reset", () => {
    cy.mount(
      <Button onClick={() => console.log("click")} text="Test" type="reset" />
    );

    cy.get("button").should("have.text", "Test");
  });

  it("Render button with type button", () => {
    cy.mount(
      <Button onClick={() => console.log("click")} text="Test" type="button" />
    );
  });

  it("Render button with type button and disabled", () => {
    cy.mount(
      <Button
        onClick={() => console.log("click")}
        text="Test"
        type="button"
        disabled
      />
    );

    cy.get("button").should("have.text", "Test");
    cy.get("button").should("be.disabled");
  });

  it("Render button with icon start", () => {
    cy.mount(
      <Button
        onClick={() => console.log("click")}
        text="Test"
        type="button"
        startIcon={<ArrowRightIcon />}
      />
    );
    cy.get("button").should("have.text", "Test");
    cy.get("button").should("have.descendants", "svg");
  });

  it("Render button with icon end", () => {
    cy.mount(
      <Button
        onClick={() => console.log("click")}
        text="Test"
        type="button"
        endIcon={<ArrowRightIcon />}
      />
    );
    cy.get("button").should("have.text", "Test");
    cy.get("button").should("have.descendants", "svg");
  });

  it("Render button with icon start and end", () => {
    cy.mount(
      <Button
        onClick={() => console.log("click")}
        text="Test"
        type="button"
        startIcon={<ArrowRightIcon />}
        endIcon={<ArrowRightIcon />}
      />
    );
    cy.get("button").should("have.text", "Test");
    cy.get("button").should("have.descendants", "svg");
  });

});
