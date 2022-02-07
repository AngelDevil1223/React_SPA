import React, { Component } from 'react';
import { Link } from 'react-router';
import "./custom.css";

class Language extends Component {

  render() {

    return (
      <div className="Form lang_form">
          <div className="Form_p">Select your Language.</div>
          <div className="dropdown">
            <button className="dropbtn">Select</button>
            <div className="dropdown-content">
              <Link className="link lang_link" to='/main'> English </Link>
              <Link className="link lang_link" to='/main'> Spanish </Link>
              <Link className="link lang_link" to='/main'> Chinese </Link>
              <Link className="link lang_link" to='/main'> Hungarian </Link>
              <Link className="link lang_link" to='/main'> Slovak </Link>
              <Link className="link lang_link" to='/main'> Czech </Link>
              <Link className="link lang_link" to='/main'> German </Link>
              <Link className="link lang_link" to='/main'> French </Link>
              <Link className="link lang_link" to='/main'> Polish </Link>
              <Link className="link lang_link" to='/main'> Romanian </Link>
              <Link className="link lang_link" to='/main'> Serbian </Link>
              <Link className="link lang_link" to='/main'> Russian </Link>
              <Link className="link lang_link" to='/main'> Italian </Link>
            </div>
          </div>
      </div>
    );
  }
}

export default Language;