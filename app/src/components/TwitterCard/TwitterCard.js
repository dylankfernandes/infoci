import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Timeline } from 'react-twitter-widgets';
//import './style.css';

const R = require("request");
const CONSUMER_KEY = 'gfSWnp25JKgvHamqPsWVNoI43';
const CONSUMER_SECRET = 'cjuQ31Fe0ZA6cMLQB2Zgz9wv5thXs5HNKEJJb4oD7c04B8fZPR';
const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAICn3AAAAAAAddlSTcarnEbXtkhyYc1pHzVplHk%3D64SrrmqL8PYoHTH9KriQFf4ZHpkACewAL8PVqpSRcwFqxFTV0E';

class TwitterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    let username = this.props.username;
    const url = 'https://api.twitter.com/1.1/users/show.json';

    R({ url: url,
      method:'GET',
      qs:{"screen_name":"mcswaggerins"},
      json:true,
      headers: {
        "Authorization": "Bearer " + BEARER_TOKEN,
        "Access-Control-Allow-Origin": "http://localhost:3001/contacts/59e141b8de6c3a912c9ad3cc",
        "Origin": "http://localhost:3001/contacts/59e141b8de6c3a912c9ad3cc",
        "Access-Control-Allow-Methods": "GET, POST, PUT",        
        "Access-Control-Allow-Headers": "application/x-www-form-urlencoded"
      }
    }, function(err, resp, body) {
      console.log(body);
    });

    const headers = {

    }

  }

  render() {
    return (
      <div>
        <h3>{this.state.username}</h3>
      </div>
    )
  }
}

export default TwitterCard;