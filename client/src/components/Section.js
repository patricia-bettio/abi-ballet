import React from "react";
import { Button } from "./Button";
import { Form } from "./Forms";
// import { newForm } from "./newForm";
import { HorizontalDivider, VerticalDivider } from "./Dividers";
import { Link } from "react-router-dom";
import "./Section.css";
import { NewForm } from "./NewForm";
import Image from "react-bootstrap/Image";

function Section(props) {
  const {
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    subdescription,
    // buttonLabel,
    img,
    alt,
    imgStart,
    withForm,
  } = props;

  return (
    <>
      <div
        className={lightBg ? "home_hero-section" : "hero__hero-section darkBg"}
        id="about"
      >
        <div>
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h2 className={lightText ? "heading2" : "heading2 dark"}>
                  {headline}
                </h2>

                {/* { withForm && <Form name={"Full name:"} field2={"emails"}/>} */}
                {/* { withForm && <Form labe={name} field2={field2}/>} */}
                {withForm && <Form {...props} />}

                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <HorizontalDivider />
                <p className="subheading">{subdescription}</p>

                {/* <Link to="/sign-up">
                  {buttonLabel && (
                    <Button buttonSize="btn-medium" buttonColor="blue">
                      {buttonLabel}
                    </Button>
                  )}
                </Link> */}
              </div>
            </div>
            <div className="col">
              {/* <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div> */}
              <div>
                <Image
                  src={img}
                  alt={alt}
                  className="img-fluid shadow-2-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionTest(props) {
  return (
    <>
      <div className={"home_hero-section darkBg"}>
        <div
          className="rowVideo home__hero-row"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{props.topLine}</div>
              <h4 className="preheading">{props.preheadline}</h4>
              <h1 className={props.lightText ? "heading" : "heading dark"}>
                {props.headline}
              </h1>

              <VerticalDivider />
              <p
                className={
                  props.lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
              >
                {" "}
                {props.name} {props.description}
              </p>

              <Link to="/sign-up">
                {props.buttonLabel && (
                  <Button buttonSize="btn-medium" buttonColor="blue">
                    {props.buttonLabel}
                  </Button>
                )}
              </Link>
            </div>
          </div>

          <div>
            {/* <video
              width="100%"
              autoplay="autoplay"
              loop="loop"
              // controls="controls"
              muted="muted"
            >
              <source src="./videos/ballet-cover.mp4" type="video/mp4" />
            </video> */}
          </div>

          {/* <div className="col2">
            <div className="home__hero-img-wrapper">
              <img src={props.img} alt={props.alt} className="home__hero-img" />
            </div>
            <div className="home__hero-img-wrapper">
              <img src={props.img} alt={props.alt} className="home__hero-img" />
            </div>
          </div> */}
        </div>
      </div>
      {/* <TopGrid /> */}
    </>
  );
}

function SectionTest2(props) {
  return (
    <>
      <div className={"home_hero-section darkBg"}>
        <div className="row home__hero-row">
          <div className="col">
            <div className="home__hero-text-wrapper">
              <h1 className={props.lightText ? "heading2" : "heading2 dark"}>
                Join the studio
              </h1>

              <HorizontalDivider />
              <p
                className={
                  props.lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
              >
                {" "}
                Please fill out the form. Each case is analyzed individually and
                new students will be contacted after registration.
              </p>

              <NewForm />

              {/* <Link to="/sign-up">
                <Button buttonSize="btn-medium" buttonColor="blue">
                  buttonLabel
                </Button>
              </Link> */}
            </div>
          </div>

          <div className="col2">
            <div>
              <Image
                src="./images/teacher1.jpg"
                alt="propsalt"
                // className="home__hero-img"
                className="img-fluid shadow-2-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Section, SectionTest, SectionTest2 };
