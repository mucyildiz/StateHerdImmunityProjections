const diff_weeks = (dt2, dt1) => {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7);
    return Math.abs(Math.round(diff));
}

export const calculateImmunityDate = (state) => {

    // we account for the 95% immunity rate of the vaccine by multiplying the num of currentVaccinated and weeklyDoses by .95
    const currentVaccinated = Math.round(state['doses'] * .95);
    const statePopulation = state.population;
    let weeklyDoses = Math.round(state['v-diff-7'] * .95);

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

    // Guam is not doing a good job with any of the data so I had to add this in
    if(year < 2021){
        return {
            date,
            stringDate: "Not enough data."
        }
    }
    return {
        date,
        stringDate: month + " " + day + ", " + year
    };
}