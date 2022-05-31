import React from "react";
import { Button } from "./Button";
import { Form } from "./Forms";
import { HorizontalDivider, VerticalDivider } from "./Dividers";
import { Link } from "react-router-dom";
import "./Section.css";
import { NewForm } from "./NewForm";
import { EmailForm } from "./EmailForm";

function SectionText(props) {
  const {
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    subdescription,
    img,
    alt,
    withForm,
  } = props;

  return (
    <>
      <div
        className={lightBg ? "hero__hero-section darkBg" : "home_hero-section"}
        id="about"
      >
        <div>
          <div className="row home__hero-row-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h2 className={lightText ? "heading2" : "heading2 dark"}>
                  {headline}
                </h2>
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
                <p className="subDescription">
                  Currently they pay R$55 monthly to have classes 2x per week
                  via the city hall.
                </p>
                <br />
                <p className="subDescription">{description}</p>
                <HorizontalDivider />
                <p className="subheading">{subdescription}</p>
              </div>
            </div>
            <div className="col">
              {/* esse div dar essa classe p prallax */}
              <div>
                <img
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

function SectionVideo(props) {
  return (
    <>
      <div className={"home_hero-section darkBg"} id="home">
        <div className="rowVideo home__hero-row">
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

          {/* <div>
            <video width="100%" autoPlay="autoplay" loop="loop" muted="muted">
              <source
                src="https://www.youtube.com/embed/abp0mfFDfWM"
                type="video/mp4"
              />
            </video>
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/abp0mfFDfWM?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
          <div className="col">
            <div>
              <img
                src="https://pbstyledk.files.wordpress.com/2022/05/grupo1.jpg"
                alt="propsalt"
                className="img-fluid shadow-2-strong"
              />
            </div>
          </div>
        </div>
      </div>
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
            </div>
          </div>

          <div className="col">
            <div>
              <img
                src="https://pbstyledk.files.wordpress.com/2022/05/rosa-aluna-1.jpg"
                alt="propsalt"
                className="img-fluid shadow-2-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionTest3(props) {
  return (
    <>
      <div className={"home_hero-section darkBg"}>
        <div className="row home__hero-row-row">
          <div className="col">
            <div className="home__hero-text-wrapper">
              <h1 className={props.lightText ? "heading2" : "heading2 dark"}>
                Questions
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
                If you have any questions please let us know. Reply within 24
                hours
              </p>

              <EmailForm />
            </div>
          </div>

          <div className="col">
            <div>
              <img
                // src="https://pbstyledk.files.wordpress.com/2022/05/rosa-aluna-1.jpg"
                src="https://pbstyledk.files.wordpress.com/2022/05/rosa-frente.jpg"
                alt="propsalt"
                className="img-fluid shadow-2-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { SectionText, SectionVideo, SectionTest2, SectionTest3 };
