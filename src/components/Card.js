import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import votedForTrump from '../data/electionResults';
import { calculateImmunityDate } from '../data/computations';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    backgroundColor: "white",
    color: "black",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: 'bold',
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
  info: {
      fontSize: 16,
      textAlign: "center",
  },
  statsContainer: {
      marginTop: 12,
  },
  stat: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  const renderBackgroundColor = (state) => {
    if(votedForTrump.includes(state)){
      return '#AA0000';
    }
    return '#00308F';
  }

  //https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  const numberWithCommas = (x) => {
    if(x === null || x === undefined){
      return x;
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom style={{backgroundColor: renderBackgroundColor(props.content)}}>
            {props.content}
        </Typography>
        <Typography className={classes.info} variant="h5" component="h2">
            {props.content} is expected to achieve herd immunity around {calculateImmunityDate(props.immunizationData).stringDate}
        </Typography>
        <Grid container spacing={3} className={classes.statsContainer}>
            <Grid item xs={6} className={classes.stat}>
                <Typography component="h3" style={{fontWeight: "bold"}}>
                    Vaccinated {numberWithCommas(props.immunizationData['doses'])}
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.stat}>
                <Typography component="h3" style={{maxWidth: 100, fontWeight: "bold"}}>
                    Population {numberWithCommas(props.immunizationData.population)}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.stat}>
                <Typography component="h3" style={{fontWeight: "bold"}}>
                    Percent Vaccinated 
                </Typography>
                <Typography component="h3" style={{fontWeight: "bold"}}>
                    {props.immunizationData['pct-vaccinated']}
                </Typography>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
