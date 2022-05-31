import React from "react";
import {
  SectionText,
  SectionVideo,
  SectionTest2,
  SectionTest3,
} from "../../Section";
import { homeObjTwo, homeObjSix } from "./Data";
import { imagesData } from "../data/galleryData";
import { Gallery } from "../../Gallery";

function Home() {
  return (
    <>
      <SectionVideo name={"Pat"} {...homeObjSix} />
      <SectionText {...homeObjTwo} />
      <SectionTest2 withForm />
      <Gallery {...imagesData} />
      <SectionTest3 withForm />
    </>
  );
}

export default Home;
