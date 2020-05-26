import React, { Component } from 'react';
import Home from './rows/Home.js'
import TheCars from './rows/TheCars.js'
import Membership from './rows/Membership.js'
import FAQ from './rows/FAQ.js'
import Apply from './rows/Apply.js'

export default class Content extends Component {
  render() {
    if(this.props.content === 'Home') {
        return (<Home name={this.props.name} gotoapply={this.props.gotoapply}/>)
    } else if(this.props.content === 'theCars') {
        return(<TheCars/>)
    } else if(this.props.content === 'Membership') {
        return(<Membership/>)
    } else if(this.props.content === 'FAQ') {
        return(<FAQ/>)
    } else if(this.props.content === 'Apply') {
        return(<Apply/>)
    } else {
        return(<Home word={this.props.content}/>)
    }
  }
};