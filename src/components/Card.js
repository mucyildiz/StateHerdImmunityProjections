import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

  //https://www.w3resource.com/javascript-exercises/javascript-date-exercise-47.php
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

      // to avoid dividing by 0, if no weekly doses were given (probably a data entry error) then we calculate avg weekly doses from dec. 21(week after first vaccine) til now
      if(Number(weeklyDoses) === 0){
          const firstVaccinationDate = new Date('December 21, 2020');
          const now = new Date();
          const num_weeks = diff_weeks(now, firstVaccinationDate);
          weeklyDoses = currentVaccinated / num_weeks;
      }

      const population = Number(statePopulation.replace(/,/g, ""));

      const herdImmunityNumber = population * .7;
      const remaining = herdImmunityNumber - currentVaccinated;
      const numWeeks = remaining / weeklyDoses;

      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      let date = new Date();
      date.setDate(date.getDate() + numWeeks * 7);
      const month = months[date.getMonth()];
      const day = date.getDay() + 1;
      const year = date.getFullYear();
      return month + " " + day + ", " + year + ".";
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
                    Population {props.immunizationData.population}
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
