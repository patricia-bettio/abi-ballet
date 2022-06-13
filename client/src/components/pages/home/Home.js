import React from "react";
import {
  SectionVideo,
  SectionSplit,
  SectionTextOnly,
  SectionQuote,
} from "../../Section";
import {
  introData,
  videoData,
  contactData,
  quoteData1,
} from "../../../data/homeData";
import { imagesData } from "../../../data/galleryData";
import { Gallery } from "../../Gallery";

function Home() {
  return (
    <>
      <SectionVideo {...videoData} />
      <SectionTextOnly withEmailForm {...introData} />
      <SectionQuote {...quoteData1} />
      <Gallery {...imagesData} />
      <SectionSplit withRegisterForm {...contactData} />
    </>
  );
}

export default Home;
