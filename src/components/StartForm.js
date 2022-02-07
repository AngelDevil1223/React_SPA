import React, { Component } from 'react';
import { Link } from 'react-router';
import "./custom.css";

class StartForm extends Component {

  render() {

    return (
      <div className="Form">
          <div className="Form_p">Are you over 18 years old? </div>
          <div className="btn_group">
            <Link className="dropbtn" to='/lang'> Yes </Link>
            <Link className="dropbtn" to='/'> N o </Link>
          </div>
      </div>
    );
  }
}

export default StartForm;
