import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react'
import  { Link } from 'react-router-dom';
import Content from './Content';

export default class Main extends Component {
  state = { activeItem: 'Home', activeComponent: `` }

  handleItemClick = (e, { name }) => this.setState({ 
    activeItem: name,  
    activeComponent: `<${name}/>`
  })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{minHeight:'100%', position:'relative'}}>
        <Segment inverted style={{zIndex:'100', marginBottom:'0'}}>
          <Menu inverted pointing secondary>
              <Menu.Item
                as={Link}
                to='/Home'
                name='Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
                gotoapply={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to={'/TheCars'}
                name='theCars'
                active={activeItem === 'theCars'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to={'/Membership'}
                name='Membership'
                active={activeItem === 'Membership'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to={'/FAQ'}
                name='FAQ'
                active={activeItem === 'FAQ'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to={'/Apply'}
                name='Apply'
                active={activeItem === 'Apply'}
                onClick={this.handleItemClick}
              />
          </Menu>
        </Segment>
        <Content content={activeItem} name={activeItem} gotoapply={()=>this.handleItemClick('click', {name: 'Apply'})}/>
        <div
          className="footer" 
          style={{
            backgroundColor:"#D3D3D3", 
            marginTop:"5em",
            paddingTop: '10px',
            height: '50px', 
            width:'100%',
            position: 'relative',
            left: '0',
            bottom: '0' 
          }}>
          <Icon size="big" link name='facebook' color="red"/>
          <Icon size="big" link name='instagram' color="red"/>
          <Icon size="big" link name='youtube' color="red"/>
        </div>
      </div>

    )
  }
};