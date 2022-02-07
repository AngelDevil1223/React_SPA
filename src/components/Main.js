import React, { Component } from 'react';
import { Link } from 'react-router';
import "./custom.css";
import Header from "./parts/Header/header.js";
import { contentdata } from "../contentdata.js";
import Content from "./parts/content/content.js";
import Application from "./parts/Application/Application.js";

console.log(contentdata);

class Main extends Component {
  render() {
    return (

      <div className="container1">
      	<Header />
      	<div className="content">
      		<div className="left_content">
      			<div className="up_part">
      				{contentdata.map(content=> <Content content={content} key={content.question} />)}
      			</div>
      			<div className="un_part">
      				<p className="un_part_h">Application</p>
      				<Application />
      			</div>
      		</div>
      		<div className="right_content">
      			<img className="img" src="./tree.jpg" />
      		</div>
      	</div>
      </div>
    );
  }
}

export default Main;