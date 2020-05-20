import React, { Component } from 'react';
import { Grid, Header, Form, Button, Icon, Select, Input, TextArea } from 'semantic-ui-react'
import './Styles/TheCars.css'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

export default class Apply extends Component {
  render() {
    return (
      <div className="TheCarsContainer">
        <Grid centered textAlign="center" >
          <Header className="ApplyHeader" as='h2' style={{backgroundImage: `url()`}}>
            <Grid.Row stretched={true} className="HeaderRow" verticalAlign='middle'>
                <div className="PhotoText">Join The Club!</div>
            </Grid.Row>
          </Header>
        </Grid>

        <Grid columns={2} divided centered textAlign="center">
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
              <Form.Field
                control={Select}
                options={genderOptions}
                label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                placeholder='Gender'
                search
                searchInput={{ id: 'form-select-control-gender' }}
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
          <Button color='blue' onClick={this.submitForm}>
            <Icon name='checkmark' /> I'm Ready To Drive!
          </Button>
        </Grid>
      </div>
    )
  }
};