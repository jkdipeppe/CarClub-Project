import React, { Component } from 'react';
import { Grid, Segment, Header, Divider, Card, Image } from 'semantic-ui-react'
import './Styles/Membership.css'

const gallardoImage = 'https://car-club-images.s3.amazonaws.com/gallardo1.jpg'
const revRoomImage = 'https://car-club-images.s3.amazonaws.com/RevRoom.jpg'
const carFleet = 'https://car-club-images.s3.amazonaws.com/carFleet.png'
const astonDriving = 'https://car-club-images.s3.amazonaws.com/astonDriving.jpg'

export default class Membership extends Component {
  render() {
    return (
      <div className="MembershipPage">
        <div className="MembershipImage" style={{backgroundImage: `url(${gallardoImage})`}}>
          <Header as="h1" textAlign='center' content="MEMBERSHIP TIERS" style={{fontWeight: 'bold', color:'black', fontSize: '50px'}}></Header>
          <Grid centered fluid columns={4} divided>
            <Grid.Row stretched>
              <Grid.Column centered>
                <Segment textAlign='center' inverted>
                  <h1 style={{color:'#d32424'}}>Comfort</h1>
                  <h4>4 Days Per Month</h4>
                  <Divider/>
                  <p>$500 Initiation Fee</p>
                  <p style={{fontWeight:'bold', marginBottom:'0'}}>$8,500 Annual Payment</p>
                  <p>($825/Month Installment Plan)</p>
                  <Divider/>
                  <p style={{fontWeight:'bold',marginBottom:'0'}}>Includes:</p>
                  <p>- Full Fleet Access</p>
                  <p>- Personal Vehicle Detailing when You Pick Up A Car</p>
                  <p>- 2 Advanced Reservations Annually</p>
                  <p>- 2 Complimentary Deliveries Annually</p>
                </Segment>
              </Grid.Column>
              <Grid.Column centered>
                <Segment textAlign='center' inverted>
                  <h1 style={{color:'#d32424'}}>Sport</h1>
                  <h4>7 Days Per Month</h4>
                  <Divider/>
                  <p >$500 Initiation Fee</p>
                  <p style={{fontWeight:'bold', marginBottom:'0'}}>$11,500 Annual Payment</p>
                  <p>($1,100/Month Installment Plan)</p>
                  <Divider/>
                  <p style={{fontWeight:'bold',marginBottom:'0'}}>Includes:</p>
                  <p>- Full Fleet Access</p>
                  <p>- Personal Vehicle Detailing when You Pick Up A Car</p>
                  <p>- 4 Advanced Reservations Annually</p>
                  <p>- 3 Complimentary Deliveries Annually</p>
                </Segment>
              </Grid.Column>
              <Grid.Column centered>
                <Segment textAlign='center' inverted>
                  <h1 style={{color:'#d32424'}}>Corsa</h1>
                  <h4>10 Days Per Month</h4>
                  <Divider/>
                  <p style={{fontWeight:'bold'}}>Waived Initiation Fee</p>
                  <p style={{fontWeight:'bold', marginBottom:'0'}}>$15,000 Annual Payment</p>
                  <p>($1,350/Month Installment Plan)</p>
                  <Divider/>
                  <p style={{fontWeight:'bold',marginBottom:'0'}}>Includes:</p>
                  <p>- Full Fleet Access</p>
                  <p>- Personal Vehicle Detailing when You Pick Up A Car</p>
                  <p>- 6 Advanced Reservations Annually</p>
                  <p>- 5 Complimentary Deliveries Annually</p>
                  <p>- Spouse Included</p>
                </Segment>
              </Grid.Column>
              
            </Grid.Row>
          </Grid>
        </div>
        <div className="Benefits">
          <Header as="h1" textAlign='center'>Member Benefits</Header>
          <Grid centered fluid columns={4} divided>
            <Grid.Row stretched>
              <Grid.Column centered>
                <Card centered="true">
                  <Card.Content>
                    <Card.Header textAlign='center'>Full Fleet Access</Card.Header>
                  </Card.Content>
                  <Image src={carFleet} wrapped ui={false} />
                  <Card.Content>
                    <Card.Meta>
                      <span className='date'>Fleet to Member Ratio 4:1</span>
                    </Card.Meta>
                    <Card.Description>
                      All members have access to the full fleet of ever changing vehicles.
                      We strive to keep a wide variety of vehicles to ensure the best of all driving esperiences.
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
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
};