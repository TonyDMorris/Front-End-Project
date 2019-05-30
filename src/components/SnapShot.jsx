import React, { Component } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Button, Modal } from "@material-ui/core";

class SnapShot extends Component {
  state = { openCamera: false };

  onTakePhoto(dataUri) {
    this.props.handlePhoto(dataUri);
    this.handleClick();
    console.log("takePhoto");
  }

  render() {
    const { openCamera } = this.state;
    return (
      <div syle={{}} className="App">
        {openCamera && (
          <Modal open={true}>
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
          </Modal>
        )}
        {!openCamera && (
          <Button
            onClick={() => {
              this.handleClick();
            }}
          >
            take a picture
          </Button>
        )}
      </div>
    );
  }
  handleClick = () => {
    this.setState({ openCamera: !this.state.openCamera });
  };
}

export default SnapShot;
