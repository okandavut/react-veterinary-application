import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./VeterinerList.css";
class VeterinerList extends Component {
  constructor(props) {
    super(props);
    this.state = { veterinerler: [] };
  }
  componentDidMount() {
    console.log(this.state.veterinerler);
  } 
  render() {
    console.log(this.state);
    return (
      <div className="list">
        <ul>
          {this.props.veterinerler.map(function(item, index) {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default VeterinerList;
