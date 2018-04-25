import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Search extends Component {
 constructor(props) {
    super(props);
    this.state = {  value: '',
                    veterinerler : [],
                    selectedOption: '',
                 };
    

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.fillCity();
  } 
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.VetList(selectedOption.value);
  }
  VetList(city) {
    fetch('http://veterinaries.enderahmetyurt.com/search?city='+city)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      this.setState({veterinerler:jsonResult});
      this.props.setVeterinerler(this.state.veterinerler);
    })
  }
  fillCity(){
    this.state.cities= [
      { value: 'ankara', label: 'Ankara' },
      { value: 'izmir', label: 'Izmir' },
      { value: 'ordu', label: 'Ordu' },
      { value: 'kayseri', label: 'Kayseri' }
    ];
  }
  render() {
    this.fillCity();
    const { selectedOption } = this.state;
    return (
      <form >
        <Select
        name="form-field-name"
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.cities}
      />
            </form>
    );
  }
}

export default Search;
