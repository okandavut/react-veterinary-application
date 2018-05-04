import React, { Component } from 'react';
import Search from './components/Search/Search';
import VeterinerList from './components/VeterinerList/VeterinerList';

import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = { veterinerler : []  , vetInfo : {} };
    this.show = false;
  }
  componentDidMount() {
  } 


  setVeterinerler(items){
    this.setState({veterinerler:items}); 
   }
  setVeterinerInfo(vetInfo){
    this.setState({vetInfo:vetInfo}); 
    this.show = true;
   }
  render() {
    return (
      <div className="App">
     
        <header className="App-header">
          <h1 className="App-title">Veteriner  Bilgi Sitesine Hoşgeldiniz. </h1>
          <Search setVeterinerler={this.setVeterinerler.bind(this)}/>
         
        </header>
        <VeterinerList veterinerler={this.state.veterinerler} setVeterinerInfo={this.setVeterinerInfo.bind(this)} onClick={this.toggleModal}/>
        <br/>
         </div>
     
    );
  }
}

export default App;
