import ReactDOM from 'react-dom';
import React, {Component} from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {red, pink500} from '@material-ui/core/colors'
import './App.css'; 
import { RaisedButton } from 'material-ui';
import SimpleExpansionPanel from './ExpansionPanel'

/*
import createMuiTheme  from '@material-ui/core/styles';

const muiTheme = getMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
*/

const muiTheme = getMuiTheme({
    palette: {
        primary: red,
        secondary: pink500
    }
});

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
            <MuiThemeProvider muiTheme={muiTheme}> 
                <div>
                    <AppBar className="AppBar" title="Cilânsdia" onLeftIconButtonClick = {() => this._toggleDrawer()}>
                        <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>
                            <List>
                                <ListItem onClick={() => this._toggleDrawer()}> Studies References </ListItem>
                            </List>
                        </Drawer>
                    </AppBar>
                </div>
                <div>
                    <SimpleExpansionPanel>
                        
                    </SimpleExpansionPanel>
                </div>
            </MuiThemeProvider>
                
            
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));
