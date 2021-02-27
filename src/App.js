import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from './data.json';
class App extends React.Component {
  state = {
    products: jsondata.data,
  };

  showProducts = () => {
    return this.state.products.map((each) => {
      return (
        <li >
          <span className={!each.stocked && "notInStock"}>{each.name}</span> - {each.price} - {each.category}
        </li>
      );
    });
  };

  search = (e) => {
    console.log(e.target.value);
    let filteredProduct = jsondata.data.filter((eachData) => {
      return eachData.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    this.setState({ products: filteredProduct });
  };

  render() {
    return (
      <div className="App">
        <input
          name="search"
          type="text"
          placeholder="search"
          onChange={this.search}
        />
        {this.showProducts()}
      </div>
    );
  }
}

export default App;
