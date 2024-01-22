import React from "react";
import { CarouselUploader } from "../index";
import "swiper/css";
import "swiper/css/navigation";

describe("<CarouselUploader />", () => {
  it("Render CarouselUploader stast initial", () => {
    cy.mount(
      <CarouselUploader onUploadImages={() => console.log("click")} data={[]} />
    );
    cy.get("button").should("have.text", "Click to upload");
  });

  it("CarouselUploader", () => {
    cy.mount(
      <CarouselUploader
        onUploadImages={() => console.log("click")}
        data={[
          {
            id: "1",
            url_image: "https://picsum.photos/200/300",
          },
        ]}
      />
    );
    cy.get("img").should("have.attr", "src", "https://picsum.photos/200/300");
  });
});
