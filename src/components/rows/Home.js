import React, { Component } from 'react';
import { 
  Button, 
  Header,
  Container,
  Divider,
  Icon,
  Grid,
  Table
} from 'semantic-ui-react';
import './Styles/Home.scss';


let ferrari = 'https://car-club-images.s3.amazonaws.com/ferrari458.jpeg'

let whyTheCarClub = [
  {
    header: "Plenty Of Time Behind The Wheel",
    body: "With membership tiers starting at 4 days of driving per month, as well as, an option to buy more days - you get plenty of time enjoying the finer vehicles in life!"
  },
  {
    header: "Why drive one when you can drive them all?",
    body: "The Car Club gives you access to an ever changing fleet of vehicles. As enthusiasts we're always wanting to get behind the wheel of anything - this is your opportunity!"
  },
  {
    header: "Garage Space",
    body: "Want to own and experience a variety of cars but don't have the space? This is the perfect way to do that! We provide storage for all of the cars, in addition to covering the insurance, maintenance and making sure we have new vehicles for our members."},
  {
    header: "Depreciation, Taxes and Insurance, Oh My!",
    body: "With multi-car ownership comes multi-car depreciation, taxes and insurance costs. With a membership at The Car Club you can experience the benefits of multi-car ownership while not worrying about how much you might lose when you go to the sell the car. You also dont have to worry about the headasches of taxes, registration, emissions testing and insurance - all of which are an afterthought with a membership to The Car Club!"
  }
]

export default class Home extends Component {
  state = { 
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    why: '',
    email: ''
  }

  render() {
    let reasons = []
    whyTheCarClub.forEach((reason, index) => {
      if(index === 0 || index % 2 === 0){
        reasons.push(
          <Container textAlign='left' style={{width:'100%', backgroundImage:'linear-gradient(to right, white, #D4D3D3, white)'}}>
            <h3 className="WhyRevRoomHeaderLeft">{reason.header}</h3>
            <p className="WhyRevRoomBodyLeft">{reason.body}</p>
          </Container>
        )
      } else {
        reasons.push(
          <Container textAlign='right'style={{width:'100%'}} >
            <h3 className="WhyRevRoomHeaderRight">{reason.header}</h3>
            <p className="WhyRevRoomBodyRight">{reason.body}</p>
          </Container>
        )
      }
    })
    return (
      <div className='HeaderContainer'>
        <Header className='HomeHeader' style={{opacity:'50%'}} color="red" size='huge'>
          <div style={{zIndex:'20',width:'100px',height:'50ox',backgroundColor:'black'}}></div>
        </Header>
        <div className="HeaderImage" style={{backgroundImage:`url(${ferrari})`}}/>
        <Container className="HomeContent" fluid style={{padding:'4em'}}>
          <Header as='h1' size="huge" style={{color:'white'}}>KEYS | CARS | CAREFREE</Header>
          <Header as='h2' style={{marginBottom:'2px', color:'white'}}>Welcome to the The Car Club</Header>
          <Header as='h3' style={{marginTop:'2px', marginBottom:'2em', color:'white'}}>Car Ownership REVolutionized</Header>
          <Container fluid>
            <Grid columns={4} centered>
              <Grid.Row>
                <Grid.Column className="CarOwnershipRevolutionized" textAlign="center">
                  <Grid.Row>
                    <Icon className="HomeIcons" size="huge" name="shield alternate" />
                  </Grid.Row>
                  <Grid.Row textAlign='center'>
                    <p className="HomeIconSubtitle">Insurance</p>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column className="CarOwnershipRevolutionized" textAlign="center">
                  <Grid.Row>
                    <Icon className="HomeIcons" size="huge" name="cogs" />
                  </Grid.Row>
                  <Grid.Row textAlign='center'>
                    <p className="HomeIconSubtitle">Maintenance</p>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column className="CarOwnershipRevolutionized" textAlign="center">
                  <Grid.Row >
                    <Icon className="HomeIcons" size="huge" name="money" />
                  </Grid.Row>
                  <Grid.Row>
                    <p className="HomeIconSubtitle">Depreciation</p>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container className="RevRoomDescription">
            Here at the The Car Club we are changing the way car enthusiasts can own and experience supercars, classic cars and everything in between!
            With a The Car Club membership we cover all of the normal headaches of car ownership so you can just book and drive.
            We welcome you join the REVolution and become a member today!
          </Container>
        </Container>

        <Container className="WhyRevRoom">
          <Header as='h1'>WHY THE CAR CLUB?</Header>
          {reasons}
        </Container>

        <Header as='h1' style={{marginBottom: '20px'}}>Car Ownership vs. The Car Club Membership</Header>
        <Container className="ComparisonTable" textAlign="center">
          <Table definition textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>The Car Club Membership</Table.HeaderCell>
                <Table.HeaderCell>Super Car ($200k)</Table.HeaderCell>
                <Table.HeaderCell>Sports Car ($100k)</Table.HeaderCell>
                <Table.HeaderCell>Classic Car ($50k)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={3}>20% Down Payment/Initiation Fee</Table.Cell>
                <Table.Cell>$500</Table.Cell>
                <Table.Cell>$40,000</Table.Cell>
                <Table.Cell>$20,000</Table.Cell>
                <Table.Cell>$10,000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Membership / Monthly Payments (5yr loan 0% APR)</Table.Cell>
                <Table.Cell>$750</Table.Cell>
                <Table.Cell>$2,667</Table.Cell>
                <Table.Cell>$1,333</Table.Cell>
                <Table.Cell>$833</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Maintenance</Table.Cell>
                <Table.Cell>$0 (Included In Membership)</Table.Cell>
                <Table.Cell>$1,000</Table.Cell>
                <Table.Cell>$400</Table.Cell>
                <Table.Cell>$600</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Insurance / Month</Table.Cell>
                <Table.Cell>$0 (Included In Membership)</Table.Cell>
                <Table.Cell>$1200</Table.Cell>
                <Table.Cell>$500</Table.Cell>
                <Table.Cell>$300</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Depreciation / Month (30% of value over 36 months) </Table.Cell>
                <Table.Cell>N/A</Table.Cell>
                <Table.Cell>$1,667</Table.Cell>
                <Table.Cell>$833</Table.Cell>
                <Table.Cell>$416</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
        <div className="JoinTheClub">
          <Container textAlign='justified'>
            <b>Interested In Becomming a Member?</b>
            <Divider />
            <Button onClick={this.props.gotoapply}>Apply Today!</Button>
          </Container>
        </div>
      </div>
    )
  }
};