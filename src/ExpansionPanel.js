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

function SimpleExpansionPanel(props) {
  return (
    <div >
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>{props.titulo}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Link href={props.link1}><p>{props.nome1}</p></Link> 
            <Link href={props.link2}><p>{props.nome2}</p></Link> 
            <text><Link href={props.link3}>{props.nome3}</Link></text> 
            <text><Link href={props.link4}>{props.nome4}</Link></text> 
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel)