import React from "react";
import "./Gallery.css";
class Gallery extends React.Component {
  render() {
    return (
      <div className="galleryWrapper">
        <h1>Gallery</h1>
        <div className="col">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/abp0mfFDfWM?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}
export { Gallery };
