import React from "react";
import { Button } from "./Button";
import { HorizontalDivider, VerticalDivider } from "./Dividers";
import { Link } from "react-router-dom";
import "./Section.css";
import { NewForm } from "./NewForm";
import { EmailForm } from "./EmailForm";
import { BsPersonPlus } from "react-icons/bs";

function SectionVideo(props) {
  return (
    <>
      <div className={"darkBg"} id="home">
        <div className="rowVideo VideoAreaWrapper">
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
                {props.name} {props.description}
              </p>

              <Link to="/sign-up">
                <Button buttonSize="btn-medium" buttonColor="blue">
                  Donate
                </Button>
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

function SectionSplit(props) {
  return (
    <>
      {console.log(props.lightBg)}
      <div
        className={
          props.lightBg
            ? "imageSplitWrapper lightBg"
            : "imageSplitWrapper darkBg "
        }
      >
        <div
          className={
            props.reverse ? "row imageSplit reverseRow" : "row imageSplit"
          }
        >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <h1 className={props.lightText ? "heading2" : "heading2 dark"}>
                {props.headline}
              </h1>
              <HorizontalDivider />
              <p className="home__hero-subtitle">{props.description}</p>
              {props.description2 && (
                <p className="home__hero-subtitle">{props.description2}</p>
              )}
              {props.description3 && (
                <p className="home__hero-subtitle">{props.description3}</p>
              )}
              {props.withRegisterForm && <NewForm />}
              {props.withEmailForm && <EmailForm />}
            </div>
          </div>

          <div className="col">
            <div>
              <img
                src={props.img}
                alt={props.alt}
                className="img-fluid shadow-2-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { SectionVideo, SectionSplit };
