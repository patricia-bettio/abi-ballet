import React from "react";
// import { TopGrid } from "../../Dividers";
import {
  SectionText,
  SectionVideo,
  SectionTest2,
  SectionTest3,
} from "../../Section";
import { homeObjTwo, homeObjSix } from "./Data";
// import { Gallery } from "../../Gallery";
import { Gallery } from "../../Gallery";
// import Background from '../../../../public/images'

function Home() {
  return (
    <>
      {/* <TopGrid /> */}
      <SectionVideo name={"Pat"} {...homeObjSix} />
      <SectionText {...homeObjTwo} />
      <SectionTest2 withForm />
      <Gallery />
      <SectionTest3 withForm />
      {/* <div>
        <Section {...homeObjTwo} />
        <NewForm label={"name"} />
      </div> */}
      {/* <Gallery /> */}
      {/* <Section withForm label={"Phone"} {...homeObjOne} />
      <Section {...homeObjThree} /> */}
    </>
  );
}

export default Home;
