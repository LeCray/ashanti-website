import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';



export class DataAnalytics extends Component {
    componentDidMount() {
      
    }

    render() {
    return (
        <div >
            <h2 ref={(section)=>{this.DataAnalyticsSlide = section;}} className="heading" style={{color: "#737373"}}>Brands Eye</h2>
            <h4>Opinion Mining</h4>

            <p  className="data-analytics-content">
                I currently work full time as an Insights Analyst at BrandsEye, an opinion mining company that uses a mix of search algorithms, 
                crowd sourcing and machine learning to mine conversation for sentiment and topics. 
                My job entails analyzing client briefs and the interrogation of mass quantitative consumer, 
                competitor and market data in order to uncover both expected and unexpected insights into consumer behavior. 
                I then consolidate these insights into accurate and compelling report and presentations.
            </p>        
            {/*<img onClick={()=>scrollToComponent(this.gxb,{offset:0,align:'top',duration:1500})} className="galxybit-img" src={require("../../../Assets/Images/work/galxybit.png")}/>*/}
        </div>
    )}
}