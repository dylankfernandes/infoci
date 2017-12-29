import React, { Component } from 'react';
import { Button } from 'antd';

class ContactMedia extends Component {
  render() {
    const { user } = this.props;
    return (
      <div class="social-media-group">
        <Button 
          size="large" 
          href={`https://instagram.com/${user.instagramHandle}`}
          style={{ color: '#ff69b4', borderColor: '#ff69b4'}}>
          Instagram
        </Button>
        <Button 
          size="large" 
          href={`https://twitter.com/${user.twitterHandle}`}
          style={{ color: '#08c', borderColor: '#08c' }}>
          Twitter
        </Button>
      </div>
    )
  }
}

export default ContactMedia;

