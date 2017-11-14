import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Timeline } from 'react-twitter-widgets';
import './style.css';

const R = require("request");
const CONSUMER_KEY = 'gfSWnp25JKgvHamqPsWVNoI43';
const CONSUMER_SECRET = 'cjuQ31Fe0ZA6cMLQB2Zgz9wv5thXs5HNKEJJb4oD7c04B8fZPR';
const BEARER_TOKEN = 'Z2ZTV25wMjVKS2d2SGFtcVBzV1ZOb0k0MzpjanVRMzFGZTBaQTZjTUxRQjJaZ3o5d3Y1dGhYczVITktFSkpiNG9EN2MwNEI4ZlpQUg==';

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
        "Access-Control-Allow-Origin": "http://localhost:3001/"
      }
    }, function(err, resp, body) {
      console.log(body);
    });
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