import React, { Component } from 'react';
<<<<<<< HEAD
import Galery from './components/Galery';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = "";
  }

  render()  {
    return(
      <div classNamec="App">
      </div>
    );
  }
=======
import Header from "./components/Header";
import Galeria from "./components/Galeria";

import mockData from './data.json';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ""
        };
    }

    handleSearch = async (e) => {
        await this.setState({search: e.target.value});
        console.log(this.state)
    };

    render() {
        return (
            <div className="App">
                <Header handleChange={this.handleSearch}/>
                <Galeria data={mockData}/>
            </div>
        );
    }
>>>>>>> dccd65206058158f93c505f39d670585b86c6d8d
}

export default Galery;
