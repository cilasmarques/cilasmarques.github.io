import React, {Component} from 'react';
import Logo from "./Header/Logo";
import SearchBar from "./Header/SearchBar";

class Header extends Component {

    render() {
        return (
            <div className="App-header">
                <SearchBar placeHolder={"Buscar"} handleChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default Header
