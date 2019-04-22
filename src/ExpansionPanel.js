import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
      
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography className={classes.heading}>Python</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h2>Corey Schafer: Python Tutorials</h2> 
                <p>https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU</p>
            <h2>Socratica: Python Programming Tutorials</h2>
                <p>https://www.youtube.com/playlist?list=PLi01XoE8jYohWFPpC17Z-wWhPOSuh8Er-</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography className={classes.heading}>Java</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h2>Loiane Groner: Curso de Java Básico Gratuito</h2>
                <p>https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography className={classes.heading}>HTML and CSS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h2>RBTech: HTML e CSS para iniciantes</h2>
                <p>https://www.youtube.com/playlist?list=PLInBAd9OZCzydDFvm06EgbPXYylGVcyIL</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography className={classes.heading}>ReactJS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h2>LearnCode.Academy: ReactJS Tutorials</h2>
                <p>https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b</p>
            <h2>LearnCode.Academy: JavaScript Fundamentals</h2>
                <p>https://www.youtube.com/playlist?list=PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography className={classes.heading}>GIT</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <h2>Git Branch</h2>
                <p>https://git-scm.com/book/pt-br/v1/Ramifica%C3%A7%C3%A3o-Branching-no-Git-B%C3%A1sico-de-Branch-e-Merge</p>
            <h2>Roger Dudler: Guia Pratico</h2>
                <p>http://rogerdudler.github.io/git-guide/index.pt_BR.html</p>
            <h2>Corey Schafer: Git Tutorials</h2>
                <p>https://www.youtube.com/playlist?list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx</p>
            <h2>Daniel Kummer: Git Flow Cheat-sheet</h2>
                <p>https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
      <ExpansionPanel>
      <ExpansionPanelSummary>
          <Typography className={classes.heading}>MarkDown</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <h2>Adam Pritchard: Markdown cheat-sheet</h2>
            <p>https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);