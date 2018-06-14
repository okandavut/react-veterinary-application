import React from "react";
import VtMap from "../VtMap/VtMap";
import { GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50,
      margin: "0 auto"
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      width: 500,
      maxHeight: 700,
      margin: "0 auto",
      padding: 30,
      display: "inline-block",
      marginTop: 30,
      textAlign: "center",
      overflowScrool: "true"
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.onClose}>Close</button>
            <VtMap google={this.props.google} />

          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default GoogleApiWrapper({
  apiKey: "maps-api-key"
})(Modal);
