import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Timeline } from 'react-twitter-widgets';
import './style.css';

class TwitterCard extends Component {
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