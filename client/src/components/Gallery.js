import React from "react";
import { HorizontalGalleryDivider } from "./Dividers";
import { BsLink } from "react-icons/bs";
import "./Gallery.css";

class Gallery extends React.Component {
  displayImage = (images) => {
    let singleImage = [];
    Object.keys(images).forEach((key) => {
      images[key].forEach((e, key) => {
        singleImage.push(
          <div className="image-item" key={key}>
            <img src={e.img} alt={e.alt} />
            <div className="overlay">
              <div className="textWrapper">
                <p className="imageTitle">{e.title}</p>
                <HorizontalGalleryDivider />
                {e.link ? (
                  <p className="imageInfo">
                    <BsLink />
                    <a
                      href={e.link}
                      className="imageLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINK to the news
                    </a>
                  </p>
                ) : (
                  <p className="imageInfo">{e.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        );
      });
    });
    return singleImage;
  };

  render() {
    const images = this.props;

    return (
      <div className="galleryWrapper">
        <h1>News gallery - click to follow the link</h1>
        <div className="container">
          <div className="image-gallery">
            <div className="column">{this.displayImage(images)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export { Gallery };
