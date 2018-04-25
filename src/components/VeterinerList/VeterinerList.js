import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./VeterinerList.css";
class VeterinerList extends Component {
  constructor(props) {
    super(props);
    this.state = { veterinerler: [] , vetInfo: "" };

  }
  componentDidMount() {
  } 
  handleClick = (item) => {
    this.setState({vetInfo:item}); 
    this.props.setVeterinerInfo(item);
  }
  render() {
    return (
      <div className="list" >
        <ul>
          {this.props.veterinerler.map(function(item, index) {
            return <li key={index} onClick={ () => this.handleClick(item)}>{item.name}</li>;
          }.bind(this))}
        </ul>
      </div>
    );
  }
}

export default VeterinerList;
