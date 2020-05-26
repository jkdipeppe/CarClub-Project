import React, { Component } from 'react';
import { Grid, Segment, Divider} from 'semantic-ui-react'

export default class MembershipTiersDesktop extends Component {
  render(){
    return(
      <Grid columns="three">
        <Grid.Row stretched style={{margin:  '50px 10px 50px 10px'}}>
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
    )
  }
}