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
import './Styles/Home.css';


let ferrari = 'https://car-club-images.s3.amazonaws.com/ferrari458.jpeg'

export default class Home extends Component {
  state = { 
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    why: '',
    email: ''
  }

  handleItemClick = (e, { name }) => this.setState({ 
    activeItem: name,  
    activeComponent: `<${name}/>`
  })

  submitForm = () => {
    
  }

  render() {
    return (
      <div className='HeaderContainer'>
        <Header className='HomeHeader' style={{opacity:'50%'}} color="red" size='huge'>
          <div style={{zIndex:'20',width:'100px',height:'50ox',backgroundColor:'black'}}></div>
        </Header>
        <div className="HeaderImage" style={{backgroundImage:`url(${ferrari})`}}/>
        <Container className="HomeContent" fluid style={{padding:'4em'}}>
          <Header as='h1' size="huge" style={{color:'white'}}>KEYS | CARS | CAREFREE</Header>
          <Header as='h2' style={{marginBottom:'2px', color:'white'}}>Welcome to the REV Room</Header>
          <Header as='h3' style={{marginTop:'2px', marginBottom:'2em', color:'white'}}>Car Ownership REVolutionized</Header>
          <Container fluid>
            <Grid columns={4} centered>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Grid.Row>
                    <Icon className="HomeIcons" size="huge" name="shield alternate" />
                  </Grid.Row>
                  <Grid.Row>
                    <p className="HomeIconSubtitle">Insurance</p>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Grid.Row>
                    <Icon className="HomeIcons" size="huge" name="cogs" />
                  </Grid.Row>
                  <Grid.Row>
                    <p className="HomeIconSubtitle">Maintenance</p>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Grid.Row>
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
            Here at the Rev Room we are changing the way car enthusiasts can own and experience supercars, classic cars and everything in between!
            With a Rev Room membership we cover all of the normal headaches of car ownership so you can just book and drive.
            We welcome you join the REVolution and become a member today!
          </Container>
        </Container>

        <Container className="WhyRevRoom">
          <Header as='h1'>WHY THE REV ROOM?</Header>
          <Container textAlign='left' style={{width:'100%', backgroundImage:'linear-gradient(to right, white, #D4D3D3, white)'}}>
            <h3 id="WhyRevRoomHeaderLeft">Plenty Of Time Behind The Wheel</h3>
            <p id="WhyRevRoomBodyLeft">With membership tiers starting at 4 days of driving per month, as well as, an option to buy more days - you get plenty of time enjoying the finer vehicles in life! </p>
          </Container>
          <Container textAlign='right'style={{width:'100%'}} >
            <h3 id="WhyRevRoomHeaderRight">Why drive one when you can drive them all?</h3>
            <p id="WhyRevRoomBodyRight">The Rev Room gives you access to an ever changing fleet of vehicles. As enthusiasts we're always wanting to get behind the wheel of anything - this is your opportunity! </p>
          </Container>
          <Container textAlign='left' style={{width:'100%', backgroundImage:'linear-gradient(to right, white, #D4D3D3, white)'}}>
            <h3 id="WhyRevRoomHeaderLeft">Plenty Of Time Behind The Wheel</h3>
            <p id="WhyRevRoomBodyLeft">With membership tiers starting at 4 days of driving per month, as well as, an option to buy more days - you get plenty of time behind the wheel! </p>
          </Container>
          <Container textAlign='right'style={{width:'100%'}} >
            <h3 id="WhyRevRoomHeaderRight">Plenty Of Time Behind The Wheel</h3>
            <p id="WhyRevRoomBodyRight">With membership tiers starting at 4 days of driving per month, as well as, an option to buy more days - you get plenty of time behind the wheel! </p>
          </Container>
          <Container textAlign='left' style={{width:'100%', backgroundImage:'linear-gradient(to right, white, #D4D3D3, white)'}}>
            <h3 id="WhyRevRoomHeaderLeft">Plenty Of Time Behind The Wheel</h3>
            <p id="WhyRevRoomBodyLeft">With membership tiers starting at 4 days of driving per month, as well as, an option to buy more days - you get plenty of time behind the wheel! </p>
          </Container>
          <Container textAlign='right'style={{width:'100%'}} >
            <h3 id="WhyRevRoomHeaderRight">Plenty Of Time Behind The Wheel</h3>
            <p id="WhyRevRoomBodyRight">With membership tiers starting at 4 days of driving per month, as well as, an option to buy more days - you get plenty of time behind the wheel! </p>
          </Container>
        </Container>

        <Container textAlign="center">
          <Table definition textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>REV Room Membership</Table.HeaderCell>
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
            <Button>Apply Today!</Button>
          </Container>
        </div>
      </div>
    )
  }
};