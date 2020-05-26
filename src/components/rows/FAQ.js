import React, { Component } from 'react';
import { Accordion, Icon, Header } from 'semantic-ui-react';
import './Styles/FAQ.scss';


export default class FAQ extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <Header size="huge" textAlign="center" className="header">Frequently Asked Questions</Header>
        <div className="questions">
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              Why The Car Club?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                Maintenance, Cost, Insurance & Deprecitation - All thing you DON'T have to worry about!
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              How Often Do The Cars Change?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                We aim to rotate cars on an annual basis. 
                This gives drivers ample time to experience all of the cars in the fleet while keeping the choices available fresh. 
                We love feedback from our members and can always keep a car longer or shorter.
              </p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              What does a membership include?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                Membership includes access to all cars in our fleet with at least 4 days a month of driving.
                We take care of all maintenance and insurance so you can book your car, drive it hard and repeat while never thinking about when the next oil change is.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              What if I'm busy one month?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p>
                Don't worry, you can roll over up to one month worth of driving days month to month.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              How much does it really cost to drive all of these amazing cars?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <p>
                We have memberships starting at $8,500 annually with a one time $500 application fee if approved. 
                This gives members access to every car in the fleet, club room and exclusive member benefits with local businesses.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 5}
              index={5}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              Do I need my own insurance?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
              <p>
                No, insurance is part of your membership! Simply book your car and go for a drive without the hassle of insurance, maintenance or registraiton. 
                Deductibles may vary by car.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 6}
              index={6}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              Aren't you just a rental car company?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
              <p>
                No, The Car Club is a members only club who all share a passion and appreciation for all things automotive. 
                We ask that all members enjoy the cars but treat with respect as if they were your own. 
                By offering events and multiple driving days a month we feel it truly allows members to get to know each other and for drivers to get more out of the cars and enjoy the nuances of driving each unique car. 
                From a 6 speed manual V8 Aston Martin Vantage to a twin turbo V6 GT-R that can do 0-60 in 3.5 seconds- The Car Club allows members to get plenty of seat time with a wide variety of vehicles!
              </p>
            </Accordion.Content>
          </Accordion>
        </div>
      </div>
    )
  }
};