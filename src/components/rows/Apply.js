import React, { Component } from 'react';
import { Grid, Header, Form, Button, Icon, Select, Input, TextArea } from 'semantic-ui-react'
import './Styles/Apply.scss'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
const tierOptions = [
  { key: 'c', text: 'Comfort starting at $8500 Annually', value: 'comfort' },
  { key: 's', text: 'Sport starting at $11,500 Annually', value: 'sport' },
  { key: 't', text: 'Corsa starting at $15,000 Annually', value: 'corsa' },
]
const monthlyAnnuallyOptions = [
  { key: 'm', text: 'Monthly', value: 'monthly' },
  { key: 'a', text: 'Annually', value: 'annually' }
]

export default class Apply extends Component {
  state={display:'desktop'}

  componentDidMount(){
    this.setState({display: this.props.display})
  }

  render() {
    console.log('the display is: ', this.state.display)
    return (
      <div className="ApplyContainer">
        <Grid centered textAlign="center" >
          <Header className="ApplyHeader" as='h2' style={{backgroundImage: `url()`}}>
            <Grid.Row stretched={true} className="HeaderRow" verticalAlign='middle'>
                <div className="PhotoText">Join The Club!</div>
            </Grid.Row>
          </Header>
        </Grid>

        <Grid columns={1} divided centered textAlign="center" style={{margin: '0 3% 0 3%'}}>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='First name'
                placeholder='First name'
              />
              <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Last name'
                placeholder='Last name'
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                control={Select}
                options={genderOptions}
                label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                placeholder='Gender'
                search
                searchInput={{ id: 'form-select-control-gender' }}
              />
              <Form.Field
                control={Select}
                options={tierOptions}
                label={{ children: 'Tier', htmlFor: 'form-select-control-tier' }}
                placeholder='Tier'
                search
                searchInput={{ id: 'form-select-control-tier' }}
              />
              <Form.Field
                control={Select}
                options={monthlyAnnuallyOptions}
                label={{ children: 'Paid', htmlFor: 'form-select-control-monthlyAnnually' }}
                placeholder='Paid'
                search
                searchInput={{ id: 'form-select-control-monthlyAnnually' }}
              />
            </Form.Group>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Opinion'
              placeholder='Opinion'
            />
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              placeholder='joe@schmoe.com'
              // error={{
              //   content: 'Please enter a valid email address',
              //   pointing: 'below',
              // }}
            />
          </Form>
          <Grid.Row>
            <Button color='blue' onClick={this.submitForm}>
              <Icon name='checkmark' /> I'm Ready To Drive!
            </Button>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
};