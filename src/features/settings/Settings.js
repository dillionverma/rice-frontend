import React, { Component } from 'react';
import stripeLogo from '../../images/stripe.png';

class Settings extends Component {
  render() {
    return <div className="page-container">
        <a target="_blank" href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_CKFZWu4NwMTsGdvonahlxmeLLl1MQek6&scope=read_write">
          <img src={stripeLogo}/>
        </a>
      </div>;
  }
}


export default Settings;
