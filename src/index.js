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
                  <SimpleExpansionPanel titulo="Python" link1="https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" nome1="Corey Schafer: Python Tutorials" link2="https://www.youtube.com/playlist?list=PLi01XoE8jYohWFPpC17Z-wWhPOSuh8Er-" nome2="Socratica: Python Programming Tutorials"/> 
                  <SimpleExpansionPanel titulo="Java" link1="https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r" nome1="Loiane Groner: Curso de Java Básico Gratuito"/>
                  <SimpleExpansionPanel titulo="HTML CSS" link1="https://www.youtube.com/playlist?list=PLInBAd9OZCzydDFvm06EgbPXYylGVcyIL" nome1="RBTech: HTML e CSS para iniciantes"/>
                  <SimpleExpansionPanel titulo="React JS" link1="https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b" nome1="LearnCode.Academy: ReactJS Tutorials" link2="https://www.youtube.com/playlist?list=PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V" nome2="LearnCode.Academy: JavaScript Fundamentals"/>                  
                  <SimpleExpansionPanel titulo="GIT" link1="https://git-scm.com/book/pt-br/v1/Ramifica%C3%A7%C3%A3o-Branching-no-Git-B%C3%A1sico-de-Branch-e-Merge" nome1="Git Branch" link2="http://rogerdudler.github.io/git-guide/index.pt_BR.html" nome2="Roger Dudler: Guia Pratico" link3="https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx" nome3="Corey Schafer: Git Tutorials" link4="https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html" nome4="Daniel Kummer: Git Flow Cheat-sheet"/>
                  <SimpleExpansionPanel titulo="MarkDown" link1="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links" nome1="Adam Pritchard: Markdown cheat-sheet"/>
                </div>
            </MuiThemeProvider>            
        );
    };
};

ReactDOM.render(<App />, document.getElementById('root'));
