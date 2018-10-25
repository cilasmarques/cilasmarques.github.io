import React, { Component } from 'react';
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
}

export default App;
