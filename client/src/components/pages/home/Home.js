import React from "react";
import { SectionVideo, SectionSplit } from "../../Section";
import { aboutData, videoData, registerData, contactData } from "./Data";
import { imagesData } from "../data/galleryData";
import { Gallery } from "../../Gallery";

function Home() {
  return (
    <>
      <SectionVideo {...videoData} />
      <SectionSplit {...aboutData} />
      <SectionSplit withRegisterForm {...registerData} />
      <Gallery {...imagesData} />
      <SectionSplit withEmailForm {...contactData} />
    </>
  );
}

export default Home;
