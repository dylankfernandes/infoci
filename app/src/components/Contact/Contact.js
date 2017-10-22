import React, { Component } from 'react';
import axios from 'axios';

import BASE_URL from '../../config';
import './styles.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
  }

  componentWillMount() {
    axios.get(BASE_URL + this.props.selected)
    .then(res => {
      this.setState({info: res.data})
    })
  }

  render() {
    const { firstName, lastName } = this.state.info;
    
    return (
      <h1>{firstName}</h1>
    )
  }
}

export default Contact;