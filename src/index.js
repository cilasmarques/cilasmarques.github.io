import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import React, {Component} from 'react';

class App extends Component{
    render(){
        return (
        <MuiThemeProvider> <AppBar/> </MuiThemeProvider>
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));
