import React from "react";
import { Button } from "./Button";
import { HorizontalDivider } from "./Dividers";
import { Link } from "react-router-dom";
import "./Section.css";
import { NewForm } from "./NewForm";
import { EmailForm } from "./EmailForm";

function SectionVideo(props) {
  return (
    <>
      <div
        className={
          props.lightBg
            ? "imageSplitWrapper lightBg"
            : "imageSplitWrapper darkBg "
        }
        id="home"
      >
        <div className="rowVideo VideoAreaWrapper">
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className="top-line">{props.topLine}</div>
              <h4 className="preheading">{props.preheadline}</h4>
              <h1 className={props.lightText ? "heading" : "heading dark"}>
                {props.headline}
              </h1>
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

          <div>
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/abp0mfFDfWM?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>*/}
          </div>
          <div className="col">
            <div>
              {/* <img
                src="https://pbstyledk.files.wordpress.com/2022/05/grupo1.jpg"
                alt="propsalt"
                className="img-fluid shadow-2-strong"
              /> */}

              {/* <iframe
                src={props.video}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                // style=""
                title="ballet-cover.mp4"
                autoplay
              ></iframe> */}

              {/* <iframe
                class="videoContainer__video"
                width="640"
                height="360"
                src={props.video}
                frameborder="0"
                autoplay
                muted
              ></iframe> */}

              {/* <video
                src=""
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></video> */}

              <video autoPlay loop>
                <source
                  src="https://imgur.com/a/b0uKL9A"
                  type="video/mp4"
                  width="640"
                  height="360"
                ></source>
              </video>

              <video
                autoPlay
                loop
                playsInLine
                className="video-background"
                muted
              >
                <source src={props.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div>
                {/* <iframe
                  src={props.video}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  // style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  title="ballet-cover.mp4"
                  autoplay
                ></iframe> */}
              </div>
              {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
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
          <div className="colText">
            <div className="home__hero-text-wrapper">
              <h1 className="heading2 dark">{props.headline}</h1>
              {props.withRegisterForm && <HorizontalDivider />}
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

          <div className="colImg">
            {props.replaceImg ? (
              <>
                <div className="headingSecondaryText">
                  {props.secondaryText}
                </div>
                <div className="headingSecondaryText">
                  {props.secondaryTextSub}
                </div>
              </>
            ) : (
              <img
                src={props.img}
                alt={props.alt}
                className="img-fluid shadow-2-strong"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
function SectionTextOnly(props) {
  return (
    <>
      <div
        className={
          props.lightBg
            ? "imageSplitWrapper lightBg"
            : "imageSplitWrapper darkBg "
        }
      >
        <div
          className={
            props.reverse ? "row textSplit reverseRow" : "row textSplit"
          }
        >
          <div className="colTextOnly2">
            <div className="middleText">
              <div>
                <h1>01.</h1>
                <p className="home__hero-subtitle">{props.description2}</p>
              </div>
              <div>
                <h1>02.</h1>
                <p className="home__hero-subtitle">{props.description3}</p>
              </div>
            </div>
            <div>
              <h1>03.</h1>
              <p className="home__hero-subtitle">{props.description4}</p>
            </div>
          </div>
          <div className="colTextOnly1">
            <div className="firstText">
              <div>
                <h1>04.</h1>
                <h1 className="introHeading">{props.description1}</h1>
                <p className="home__hero-subtitle">{props.description2}</p>
              </div>

              <p className="home__hero-subtitle">{props.description3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SectionQuote(props) {
  return (
    <>
      <div
        className={
          props.lightBg
            ? "imageSplitWrapper lightBg"
            : "imageSplitWrapper darkBg "
        }
      >
        <div className="textQuote">
          <div className="colImg">
            <>
              <div className="headingSecondaryText">{props.secondaryText}</div>
              <div className="headingSecondaryText">
                {props.secondaryTextSub}
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export { SectionVideo, SectionSplit, SectionTextOnly, SectionQuote };
