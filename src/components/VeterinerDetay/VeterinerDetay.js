import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./VeterinerDetay.css";
class VeterinerList extends Component {
  constructor(props) {
    super(props);
    this.state = { veterinerler: [] , vetInfo: "" };

  }
  componentDidMount() {
  } 

  render() {
    return (
    <div className="detay">
        <p className="headTextStyle">VETERINER AYRINTILI BILGI</p>
        <p>ID:&nbsp;&nbsp;{ this.props.vetInfo.id }</p>
        <p>NAME:&nbsp;&nbsp;{ this.props.vetInfo.name }</p>
        <p>ADRES:&nbsp;&nbsp;{ this.props.vetInfo.address }</p>
        <p>SEHİR:&nbsp;&nbsp;{ this.props.vetInfo.city }</p>
        <p>İLÇE:&nbsp;&nbsp; { this.props.vetInfo.town }</p>
        <p>EMAİL:&nbsp;&nbsp;{ this.props.vetInfo.email }</p>
        <p>TELEFON:&nbsp;&nbsp;{ this.props.vetInfo.telephone }</p>
    </div>
    );
  }
}

export default VeterinerList;
