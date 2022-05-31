import React, { Component } from "react";
import "./Dividers.css";

class HorizontalDivider extends Component {
  render() {
    return (
      <div className="container">
        <div className="border"></div>
      </div>
    );
  }
}
class HorizontalGalleryDivider extends Component {
  render() {
    return (
      <div className="container">
        <div className="galleryBorder"></div>
      </div>
    );
  }
}

class VerticalDivider extends Component {
  render() {
    return (
      <div className="vertical-container">
        <div className="vertical-border"></div>
      </div>
    );
  }
}
export { HorizontalDivider, VerticalDivider, HorizontalGalleryDivider };
