import React, { Component } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

class SnapShot extends Component {
  onTakePhoto(dataUri) {
    this.props.handlePhoto(dataUri);
    this.props.handleCamera();
    console.log("takePhoto");
  }

  render() {
    return (
      <div syle={{ overflow: "hiddden" }} className="App">
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
          idealResolution={{ width: 400, height: 800 }}
          imageType={IMAGE_TYPES.JPG}
          imageCompression={0.97}
          isMaxResolution={false}
          isImageMirror={false}
          isSilentMode={true}
          isDisplayStartCameraError={true}
          isFullscreen={true}
          sizeFactor={1}
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
        />
      </div>
    );
  }
}

export default SnapShot;
