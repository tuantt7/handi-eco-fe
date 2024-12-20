import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import CarouselSection from "./carousel";
import Social from "./social";
import OurProduct from "./our-product";
import OurExport from "./our-export";
import OurStory from "./our-story";
import Product from "./product";

const HomePage: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <CarouselSection slides={SLIDES} options={OPTIONS} />
      <OurProduct />
      <Social />
      <OurExport />
      <Product />
      <OurStory />
    </>
  );
};

export default HomePage;
