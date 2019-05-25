import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel() {
  return (
    <div >
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>Python</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Link href="https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU">Corey Schafer: Python Tutorials</Link> 
            <Link href="https://www.youtube.com/playlist?list=PLi01XoE8jYohWFPpC17Z-wWhPOSuh8Er-">Socratica: Python Programming Tutorials</Link> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography>Java</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Link href="https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r">Loiane Groner: Curso de Java Básico Gratuito</Link> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography >HTML and CSS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Link href="https://www.youtube.com/playlist?list=PLInBAd9OZCzydDFvm06EgbPXYylGVcyIL">RBTech: HTML e CSS para iniciantes</Link> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography >ReactJS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Link href="https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b">LearnCode.Academy: ReactJS Tutorials</Link> 
            <Link href="https://www.youtube.com/playlist?list=PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V">LearnCode.Academy: JavaScript Fundamentals</Link>           
          </Typography>
          </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography> GIT</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Link href="https://git-scm.com/book/pt-br/v1/Ramifica%C3%A7%C3%A3o-Branching-no-Git-B%C3%A1sico-de-Branch-e-Merge">Git Branch</Link> 
            <Link href="http://rogerdudler.github.io/git-guide/index.pt_BR.html">Roger Dudler: Guia Pratico</Link> 
            <Link href="https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx">Corey Schafer: Git Tutorials</Link> 
            <Link href="https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html">Daniel Kummer: Git Flow Cheat-sheet</Link> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography >MarkDown</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Link href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links">Adam Pritchard: Markdown cheat-sheet</Link> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
    </div>
  );}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel)