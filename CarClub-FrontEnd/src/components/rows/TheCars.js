import React, { Component } from 'react';
import { Grid, Image, Header, Container } from 'semantic-ui-react'
import './Styles/TheCars.css'


const vantageImage = require('../../images/2007-aston-martin-vantage.jpeg')
const rapideImage = require('../../images/2011-aston-martin-rapide1.jpeg')
const gtrImage = require('../../images/gtr1.jpeg')
const hummerImage = require('../../images/hummer1.png')
const camaroImage = require('../../images/71camaroSS2.jpeg')
const corvette = require('../../images/c8.jpeg')

const vantage = {
  header: 'Aston Martin V8 Vantage',
  meta: '4.3L V8',
  description:
    'Styled  by Henry Fisker, this is one of the most elegant and beautiful cars ever made. The style is timeless and the 6 speed manual gearbox makes this the perfect drivers car!',
}
const rapide = {
  header: 'Aston Martin Rapide',
  meta: 'Naturally Aspirated V12',
  description: 'Aston Martin took their elegant design aesthetics and increadible V12 and created the best sounding sedan on the road.'
}
const gtr = {
  header: 'Nissan GT-R',
  meta: 'Twin Turbo V6',
  description: 'This car changed the game back in 2007 when it was originally released. The R35 is is successor to the Skyline GT-R'
}
const hummer = {
  header: 'H1 Hummer',
  meta: '6.5L Turbo  Diesel V8',
  description: 'There is no vehicle that quite as the road presence of an H1. Get behind the wheel of this monster and takle any terrian that you encounter!'
}
const camaro = {
  header: '1971 Camaro SS',
  meta: '383cid Racing Stroker V8 - 400hp',
  description: 'Take this car out for the perfect weekend driviing experenece. Nothing like classic american muscle cruisng to Cars and Coffee or on the back roads!'
}

export default class TheCars extends Component {
  render() {
    return (
      <div className="TheCarsContainer">
        <Grid centered textAlign="center" style={{position: 'relative'}}>
          <Header className="TheCarsHeader" as='h2' style={{backgroundImage: `url(${corvette})`}}>
            <Grid.Row stretched={true} className="HeaderRow" verticalAlign='middle'>
                <div className="PhotoText">THE CARS</div>
            </Grid.Row>
          </Header>
        </Grid>

        <Grid columns={2} divided centered textAlign="center">
          
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Image centered className="TheCarsImage" src={vantageImage} />
            </Grid.Column>
            <Grid.Column >
              <Container className="CarDescriptions" fluid textAlign='center'>
                <h2>{vantage.header}</h2>
                <p>{vantage.meta}</p>
                <p>
                  {vantage.description}
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
    
          <Grid.Row verticalAlign='middle' style={{backgroundColor:"#fafafa"}}>
            <Grid.Column >
              <Container className="CarDescriptions" fluid textAlign='center'>
                <h2>{rapide.header}</h2>
                <p>{rapide.meta}</p>
                <p>
                  {rapide.description}
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image centered className="TheCarsImage" src={rapideImage} />
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Image centered className="TheCarsImage" src={gtrImage} />
            </Grid.Column>
            <Grid.Column >
              <Container className="CarDescriptions" fluid textAlign='center'>
                <h2>{gtr.header}</h2>
                <p>{gtr.meta}</p>
                <p>
                  {gtr.description}
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row verticalAlign='middle' style={{backgroundColor:"#fafafa"}}>
            <Grid.Column >
              <Container className="CarDescriptions" fluid textAlign='center'>
                <h2>{hummer.header}</h2>
                <p>{hummer.meta}</p>
                <p>
                  {hummer.description}
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image centered className="TheCarsImage" src={hummerImage} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row verticalAlign='middle' >
            <Grid.Column>
              <Image centered className="TheCarsImage" src={camaroImage} />
            </Grid.Column>
            <Grid.Column >
              <Container className="CarDescriptions" fluid textAlign='center'>
                <h2>{camaro.header}</h2>
                <p>{camaro.meta}</p>
                <p>
                  {camaro.description}
                </p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
};