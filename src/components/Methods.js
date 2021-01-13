import React from 'react';
import './Methods.css';
import Container from 'react-bootstrap/Container';

const Methods = () => {
    return (
        <Container fluid="true" id='methods-container'>
                <Container id="text-container">
                    <div id='text'>
                        <h1>Methods</h1>
                        <p>
                        The point of this project was to showcase my skills using React and various libraries. As such, the math behind
                        the projections is not too complicated and should not be used as a point of reference to see when herd immunity
                        will actually be achieved. We assume herd immunity is reached at 70% of the population (<a href="https://www.who.int/news-room/q-a-detail/herd-immunity-lockdowns-and-covid-19" target="_blank" rel="noopener noreferrer" style={{color: "black", fontWeight:"bold"}}>
                        the real percentage is unknown</a>).
                        </p>
                        <p>
                        Our herd immunity population size is the total population * .7. We subtract from this number the amount of people
                        who have already been vaccinated. Then we see how many people have been vaccinated in the last week. We calculate
                        how many weeks it would take to reach the herd immunity population size if we continued at the same rate as last week.
                        The 95% success rate of the vaccine is accounted for by assuming that 5% of the recorded vaccines will not 
                        have any effect upon the date.
                        </p>
                        <h3>Potential Problems With Method</h3>
                        <p>According to the CDC, reinfections are possible but rare. Given that it is still relatively early into the pandemic
                        I don't feel comfortable assuming that anybody who has contracted COVID-19 will gain immunity to the disease. Therefore 
                        I have chosen to assume that the only way to gain immunity against the disease is to get the vaccine. This could be a problem
                        because it could be true that reinfections help gain progress towards herd immunity, but as of right now there's simply
                        no way to know how much progress that is.
                        </p>
                    </div>
                </Container>
        </Container>
    )
}


export default Methods;