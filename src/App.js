import React, { Component } from 'react';
import Search from './components/Search/Search';
import VeterinerList from './components/VeterinerList/VeterinerList';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = { veterinerler : [] };
  }
  componentDidMount() {
    console.log(this.state.veterinerler);
  } 
  setVeterinerler(items){
    this.setState({veterinerler:items});  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Veteriner  Bilgi Sitesine Hoşgeldiniz. </h1>
          <Search setVeterinerler={this.setVeterinerler.bind(this)}/>
         
        </header>
        <VeterinerList veterinerler={this.state.veterinerler}/>
      </div>
    );
  }
}

export default App;
