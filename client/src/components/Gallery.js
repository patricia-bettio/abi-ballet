import React from "react";
import "./Gallery.css";
class Gallery extends React.Component {
  render() {
    return (
      <div className="galleryWrapper">
        <h1>Gallery</h1>
        {/* <div classNameName="col">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/abp0mfFDfWM?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}

        <div className="container">
          <div className="image-gallery">
            <div className="column">
              <div className="image-item">
                <img
                  src="https://pbstyledk.files.wordpress.com/2022/05/noticias.jpg"
                  alt=""
                />
                <div className="overlay">
                  <span>Image title</span>
                </div>
              </div>
              <div className="image-item">
                <img
                  src="https://pbstyledk.files.wordpress.com/2022/05/rosa-aluna-1.jpg"
                  alt=""
                />
                <div className="overlay">
                  <span>Image title</span>
                </div>
              </div>
              <div className="image-item">
                <iframe
                  width="100%"
                  height="auto"
                  src="https://www.youtube.com/embed/abp0mfFDfWM?controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="column">
              {" "}
              <div className="image-item">
                <img
                  src="https://pbstyledk.files.wordpress.com/2022/05/grupoazul.jpg"
                  alt=""
                />
                <div className="overlay">
                  <span>Image title</span>
                </div>
              </div>
              <div className="image-item">
                <img
                  src="https://pbstyledk.files.wordpress.com/2022/05/aluna.jpg"
                  alt=""
                />
                <div className="overlay">
                  <span>Image title</span>
                </div>
              </div>
            </div>
            <div className="column">
              {" "}
              <div className="image-item">
                <img
                  src="https://pbstyledk.files.wordpress.com/2022/05/noticias.jpg"
                  alt=""
                />
                <div className="overlay">
                  <span>Image title</span>
                </div>
              </div>
              <div className="image-item">
                <img
                  src="https://pbstyledk.files.wordpress.com/2022/05/turma-adulto.jpg"
                  alt=""
                />
                <div className="overlay">
                  <span>Image title</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { Gallery };
