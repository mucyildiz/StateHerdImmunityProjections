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
    fontSize: 28,
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
      display: "flex",
      flexDirection: "column",
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  const diff_weeks = (dt2, dt1) => {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));
  }

  const calculateImmunityDate = () => {
      // take commas out of string and convert to Number
      const currentVaccinated = props.immunizationData['doses-number'];
      const statePopulation = props.immunizationData.population;
      let weeklyDoses = props.immunizationData['v-diff-7'];

      // to avoid dividing by 0, if no weekly doses were given (likely a data entry error) then we calculate avg weekly doses from dec. 14(first vaccine) til now
      if(Number(weeklyDoses) === 0){
          const firstVaccinationDate = new Date('December 14, 2020');
          const now = new Date();
          const num_weeks = diff_weeks(now, firstVaccinationDate);
          weeklyDoses = currentVaccinated / num_weeks;
      }

      const population = Number(statePopulation.replace(/,/g, ""));

      const herdImmunityNumber = population * .7;
      const remaining = herdImmunityNumber - currentVaccinated;
      const numWeeks = remaining / weeklyDoses;

      let date = new Date();
      date.setDate(date.getDate() + numWeeks * 7);
      const month = date.getMonth();
      const day = date.getDay();
      const year = date.getFullYear();
      return month + " " + day + " " + year;
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
            {props.content}
        </Typography>
        <Typography className={classes.info} variant="h5" component="h2">
            {props.immunizationData.state} is expected to achieve herd immunity around {calculateImmunityDate()}
        </Typography>
        <Grid container spacing={3} className={classes.statsContainer}>
            <Grid item xs={6} className={classes.stat}>
                <Typography component="h3" style={{fontWeight: "bold"}}>
                    Vaccinated {props.immunizationData['doses-number']}
                </Typography>
            </Grid>
            <Grid item xs={6} className={classes.stat}>
                <Typography component="h3" style={{maxWidth: 100, fontWeight: "bold"}}>
                    Infected {props.covidData.positive}
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
