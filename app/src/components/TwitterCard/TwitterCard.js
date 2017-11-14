import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Timeline } from 'react-twitter-widgets';
import './style.css';

const R = require("request");
const CONSUMER_KEY = 'gfSWnp25JKgvHamqPsWVNoI43';
const CONSUMER_SECRET = 'cjuQ31Fe0ZA6cMLQB2Zgz9wv5thXs5HNKEJJb4oD7c04B8fZPR';

class TwitterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  getBearerToken = () => {
    const concat = `${CONSUMER_KEY}:${CONSUMER_SECRET}`;
    const CREDENTIALS = new Buffer(concat).toString('base64');
    const credits = btoa(concat)

    const url = 'https://api.twitter.com/oauth2/token';
    
    R({url: url,
      method:'POST',
      headers: {
        "Authorization": "Basic " + credits,
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Length": "29",
        "Accept-Encoding": "gzip",
        "User-Agent": "Infoci"
      },
      body: "grant_type=client_credentials"
    }, function(err, resp, body) {
      console.log(err)
      console.log(body); //the bearer token...
      return body;
    });
  }

  componentWillMount() {
    let username = this.props.username;
    const token = this.getBearerToken();
  }

  render() {
    return (
      <div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'mcswaggerins'
          }}
          options={{
            username: 'TwitterDev',
            height: '400',
            width: '50vw'
          }}
          onLoad={() => console.log('Timeline is loaded!')} />
      </div>
    )
  }
}

export default TwitterCard;