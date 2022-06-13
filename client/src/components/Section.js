import React from "react";
import ReactPlayer from "react-player";
import { BsDownload } from "react-icons/bs";
import { Button } from "./Button";
import { HorizontalDivider } from "./Dividers";
import { NewForm } from "./NewForm";
import { EmailForm } from "./EmailForm";
import "./Section.css";

function SectionVideo(props) {
  return (
    <>
      <div className="videoSplitWrapper" id="home">
        <div className="rowVideo VideoAreaWrapper">
          <div className="col">
            <div>
              <div className="introWrapper">
                <h4 className="preheading">{props.preheadline}</h4>
                <h1 className="heading">{props.headline}</h1>
                <p className="heroSub dark">
                  {props.name} {props.description}
                </p>
              </div>

              <a
                target="_blank"
                rel="noreferrer"
                href={props.donateLink}
                className="donateBtn"
              >
                <Button buttonColor="greenBtn">Donate</Button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/spreadsheets/d/1X-Gik-Sdur7Xlifj6EPEMrbvxbSdKEW3zPIPIyZKDJs/edit?usp=sharing"
              >
                <Button buttonColor="darkBtn">
                  <BsDownload />
                  Cost estimate
                </Button>
              </a>
            </div>
          </div>

          <div className="col">
            <div>
              <ReactPlayer
                autoPlay={true}
                url={props.video}
                loop={true}
                muted={true}
                controls={false}
                playing={true}
                config={{ vimeo: { playerOptions: { background: true } } }}
                width="100%"
                height="100%"
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
        <div className={props.reverse ? "imageSplit reverseRow" : "imageSplit"}>
          <div className="colText">
            <div className="textWrapper">
              <h1 className="heading2 dark">{props.headline}</h1>
              {props.withRegisterForm && <HorizontalDivider />}
              <p className="formSubtitle">{props.description}</p>
              {props.withRegisterForm && <NewForm />}
              {props.withEmailForm && <EmailForm />}
            </div>
          </div>

          <div className="colImg">
            {props.replaceImg ? (
              <>
                <div className="openQuoteWrapper">
                  <span className="openQuote">⹂</span>
                </div>
                <div className="headingSecondaryText">
                  {props.secondaryText}
                </div>
                <div className="headingSecondarySub">
                  ⸺ {props.secondaryTextSub}
                </div>
              </>
            ) : (
              <img src={props.img} alt={props.alt} />
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
        id="about"
      >
        <div
          className={
            props.reverse ? "row textSplit reverseRow" : "row textSplit"
          }
        >
          <div className="colTextOnly2">
            <div className="middleText">
              <div>
                <h1 className="introNumbers">01.</h1>
                <p className="blocks124">{props.description2}</p>
              </div>
              <div>
                <h1 className="introNumbers">02.</h1>
                <p className="blocks124">{props.description3}</p>
              </div>
            </div>
            <div>
              <h1 className="introNumbers">03.</h1>
              <p className="block3">{props.description4}</p>
            </div>
            <div className="firstText">
              <div>
                <h1 className="introNumbers">04.</h1>
                <h1 className="introHeading">{props.description1}</h1>
                <p className="blocks124">{props.description5}</p>
              </div>
            </div>
          </div>

          <div className="colText">
            <div className="textWrapper">
              <h1 className="heading2 dark">{props.formHeader}</h1>
              <HorizontalDivider />

              <p className="formSubtitle">{props.formSub}</p>
              {props.withEmailForm && <EmailForm />}
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
      <div className="imageSplitWrapper lightBg quoteCenter">
        <div className="singleQuoteWrapper">
          <div className="openQuoteWrapper">
            <span className="openQuote">⹂</span>
          </div>
          <div className="headingSecondaryText">{props.secondaryText}</div>
          <div className="headingSecondarySub">⸺ {props.secondaryTextSub}</div>
        </div>
      </div>
    </>
  );
}

export { SectionVideo, SectionSplit, SectionTextOnly, SectionQuote };
