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




export class PSWP extends Component {
  componentDidMount() {
      window.scrollTo(0, 0)
    }

  render() {
    return (
        <div>
            <h2 className="heading" style={{color: "#737373"}}>Public Speaking, Writing & Poetry</h2>            
            
            <div className="pswp-logo-container">
              <img className="pswp-logo" src={require("../../../Assets/Images/pswp/shanti.jpg")}/>
            </div>

            <p className="parkupp-content">
                I am an experienced public speaker and published writer. I am passionate about social justice issues, 
                which is a legacy of my involvement 
                in the 2015/2016 #FeesMustFall protests at Stellenbosch University as head girl (Prim) of Metanoia Residence. 
                I sit on panel discussions and facilitate difficult, open, flat structured dialogues. 

                <div className="pswp-logo-container">
                  <img className="pswp-logo" src={require("../../../Assets/Images/pswp/shanti2.jpg")}/>
                </div>

                My writing comes from the need for black African women to write and preserve their own herstories and ensure that the narratives of 
                black African woman are authentic, real and entirely their own. 
                My participation as a contributing author to the Nasty Women Talk Back book project is a key example of this.
                <br/><br/> 
                For more information on the NWTB project, go <a href="https://www.nastywomen.org.za/nasty-women-talk-back-launches/" target="_blank">here</a>.
                <br/><br/>
                I write and perform protest poetry in my spare time.
                

                <div className="pswp-logo-container">
                  <img className="pswp-logo" src={require("../../../Assets/Images/pswp/shanti3.jpg")}/>
                </div>

                For booking inquiries please go to Contact page.
            </p>  
       
        </div>
    )}
}