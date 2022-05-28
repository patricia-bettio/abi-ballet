import React from "react";
// import { TopGrid } from "../../Dividers";
import { Section, SectionTest, SectionTest2 } from "../../Section";
import { homeObjTwo, homeObjSix } from "./Data";
// import { Gallery } from "../../Gallery";
// import Gallery from "../../Gallery";
// import ContactForm from "../../ContactForm";
// import Background from '../../../../public/images'

function Home() {
  return (
    <>
      {/* <TopGrid /> */}
      <SectionTest name={"Pat"} {...homeObjSix} />
      <Section {...homeObjTwo} />
      <SectionTest2 withForm />
      {/* <div>
        <Section {...homeObjTwo} />
        <NewForm label={"name"} />
      </div> */}
      {/* <Gallery /> */}
      {/* <ContactForm /> */}
      {/* <Section withForm label={"Phone"} {...homeObjOne} />
      <Section {...homeObjThree} /> */}
    </>
  );
}

export default Home;
