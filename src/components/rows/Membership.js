import React, { Component } from 'react';
import { Grid, Header, Card, Image } from 'semantic-ui-react'
import './Styles/Membership.scss'
import MembershipTiersMobile from './MembershipTiersMobile'
import MembershipTiersDesktop from './MembershipTiersDesktop'

const gallardoImage = 'https://car-club-images.s3.amazonaws.com/gallardo1.jpg'
const revRoomImage = 'https://car-club-images.s3.amazonaws.com/RevRoom.jpg'
const carFleet = 'https://car-club-images.s3.amazonaws.com/carFleet.png'
const astonDriving = 'https://car-club-images.s3.amazonaws.com/astonDriving.jpg'

export default class Membership extends Component {
  state = {
    largeScreen: true
  }
  componentDidMount(){
    let screenSize = true
    if(window.innerWidth < 550){
      screenSize = false
    }
    this.setState({largeScreen: screenSize})
  }

  render() {
    
    return (
      <div className="MembershipPage">
        <div className="MembershipImage" style={{backgroundImage: `url(${gallardoImage})`}}>
          <Header as="h1" textAlign='center' content="MEMBERSHIP TIERS" style={{fontWeight: 'bold', color:'black', fontSize: '50px'}}></Header>
          <Grid centered fluid>
            <div className="MembershipDesktop">
              <MembershipTiersDesktop />
            </div>
             <div className="MembershipMobile">
              <MembershipTiersMobile />
            </div> 
          </Grid>
        </div>
        <div className="Benefits">
          <Header as="h1" textAlign='center'>Member Benefits</Header>
          <Grid centered fluid columns={4} doubling>
              <Grid.Column centered>
                <Card centered="true">
                  <Card.Content>
                    <Card.Header textAlign='center'>Full Fleet Access</Card.Header>
                  </Card.Content>
                  <Image src={carFleet} wrapped ui={false} />
                  <Card.Content>
                    <Card.Meta>
                      <span className='date'>Member to Fleet Ratio 4:1</span>
                    </Card.Meta>
                    <Card.Description>
                      All members have access to the full fleet of ever changing vehicles.
                      We strive to keep a wide variety of vehicles to ensure the best of all driving experiences.
                      By keeping a low car to driver ratio it helps ensure that there is always a car ready for you!
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column centered>
                <Card centered="true">
                  <Card.Content>
                    <Card.Header textAlign='center'>Rev Room Access</Card.Header>
                  </Card.Content>
                  <Image src={revRoomImage} wrapped ui={false} />
                  <Card.Content>
                    <Card.Meta>
                      <span className='date'>Unique Event Space</span>
                    </Card.Meta>
                    <Card.Description>
                      The Rev Room is a unique space where you can kick back and relax with other members while taking in the views of your fleet of cars.
                      Members have access to utilize this event space for small social gatherings, as well as, take part in events we host throughout the year.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column centered>
                <Card centered="true">
                  <Card.Content>
                    <Card.Header textAlign='center'>Exclusive Member Events</Card.Header>
                  </Card.Content>
                  <Image src={astonDriving} wrapped ui={false} />
                  <Card.Content>
                    <Card.Meta>
                      <span className='date'>Opportunities To Get Out And Drive</span>
                    </Card.Meta>
                    <Card.Description>
                      Members will have access to various drives throughout the year where you can switch between multiple cars during a days outing. 
                      We organize scienic drives that include a lunch stop where members can experince various cars in the fleet, a delicious meal and good conversation with other members.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
};