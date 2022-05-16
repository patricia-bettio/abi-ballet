import React from 'react'
import { Section, SectionTest } from '../../Section'
import Pricing from '../../Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from './Data'
// import Background from '../../../../public/images'

function Home() {
  return (
    <>
        <SectionTest name={"Pat"} {...homeObjSix}/>
        <Section withForm label={["Name"]} label2={"Phone"} {...homeObjFive}/>
        <Section withForm label={"Phone"} {...homeObjOne}/>
        <Pricing />
        <Section {...homeObjTwo}/>
        <Section {...homeObjThree}/>
        <Section {...homeObjFour}/>

    </>
  )
}

export default Home