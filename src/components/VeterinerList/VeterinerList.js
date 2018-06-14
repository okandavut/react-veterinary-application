import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "./VeterinerList.css";
class VeterinerList extends Component {
  constructor(props) {
    super(props);
    this.state = { veterinerler: [], vetInfo: "", isOpen: false };
  }
  componentDidMount() {}
  toggleModal = () => {
    this.setState({ isOpen: false });
  };
  handleClick = item => {
    this.setState({ vetInfo: item, isOpen: true });
    this.props.setVeterinerInfo(item);
  };
  render() {
    return (
      <div className="list">
        <ul>
          {this.props.veterinerler.map(
            function(item, index) {
              return (
                <li key={index} onClick={() => this.handleClick(item)}>
                  {item.name}
                </li>
              );
            }.bind(this)
          )}
        </ul>
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          vetInfo={this.state.vetInfo}
        >
          <p>ID:&nbsp;&nbsp;{this.state.vetInfo.id}</p>
          <p>NAME:&nbsp;&nbsp;{this.state.vetInfo.name}</p>
          <p>ADRES:&nbsp;&nbsp;{this.state.vetInfo.address}</p>
          <p>SEHİR:&nbsp;&nbsp;{this.state.vetInfo.city}</p>
          <p>İLÇE:&nbsp;&nbsp; {this.state.vetInfo.town}</p>
          <p>EMAİL:&nbsp;&nbsp;{this.state.vetInfo.email}</p>
          <p>TELEFON:&nbsp;&nbsp;{this.state.vetInfo.telephone}</p>
        </Modal>
      </div>
    );
  }
}

export default VeterinerList;
