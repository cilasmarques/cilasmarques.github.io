import ReactDOM from 'react-dom';
import React, {Component} from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import './App.css'; 

class App extends Component{
    constructor () {
        super();
        this.state = {
            drawerOpened: false
        };
    };

    _toggleDrawer () {
        this.setState ({
            drawerOpened: !this.state.drawerOpened
        });
    };

    render(){
        return (
            <MuiThemeProvider> 
                <div>
                    <AppBar title="Cilânsdia" onClick = {() => _toggleDrawer} /> 
                    <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer}>
                        <List>
                            <ListItem> mai rapai </ListItem>
                            <ListItem> rapai mai</ListItem>
                        </List>
                    </Drawer>>
                </div>
            </MuiThemeProvider>
            
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));
