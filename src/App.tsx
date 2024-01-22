import React from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";

import { CarouselUploader } from "./components/CarouselUploader";

function App() {
  return (
    <>
      <CarouselUploader onUploadImages={() => console.log("click")} data={[]} />
    </>
  );
}

export default App;
