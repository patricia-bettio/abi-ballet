import React from "react";
import { BsLink } from "react-icons/bs";
import { HorizontalGalleryDivider } from "./Dividers";
import "./Gallery.css";

class Gallery extends React.Component {
  displayImage = (images) => {
    let singleImage = [];
    Object.keys(images).forEach((key) => {
      images[key].forEach((e, key) => {
        singleImage.push(
          <div className="imageItem" key={key}>
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
                      Direct link
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
      <div className="galleryWrapper" id="gallery">
        <h1>Gallery & News</h1>
        <div className="columnWrapper">
          <div className="column">{this.displayImage(images)}</div>
        </div>
      </div>
    );
  }
}

export { Gallery };
