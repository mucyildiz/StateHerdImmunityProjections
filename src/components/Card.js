import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  info: {
      fontSize: 16,
  },
  statsContainer: {
      marginTop: 12,
  },
  stat: {
      textAlign: "center",
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
            {props.content}
        </Typography>
        <Typography className={classes.info} variant="h5" component="h2">
            {props.data.state} is expected to achieve herd immunity around May 27, 2021.
        </Typography>
        <Grid container spacing={3} className={classes.statsContainer}>
            <Grid item xs={6} className={classes.stat}>
                <Typography component="h3">
                    Total Vaccinations: {props.data.vaccinated}
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.stat}>
                Test
            </Grid>
            <Grid item xs={12} className={classes.stat}>
                Test
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
