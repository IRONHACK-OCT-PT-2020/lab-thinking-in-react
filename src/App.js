import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from './data.json'
class App extends React.Component { 
  state = {
    products : jsondata.data
  }


 showProducts =()=>{
  return this.state.products.map(each=>{
     return <li>{each.name}</li>
   })
 }



  render(){
    return (
      <div className="App">
        {this.showProducts()}
      </div>
    );
  }
}

export default App;
