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
            
            <div className="parkupp-logo-container">
              {/*<img className="parkupp-logo" src={require("../../../Assets/Images/work/parkupp_logo.png")}/>*/}
            </div>

            <p className="parkupp-content">
                I am an experienced public speaker and published writer. I am passionate about social justice issues, 
                which is a legacy of my involvement 
                in the 2015/2016 #FeesMustFall protests at Stellenbosch University as head girl (Prim) of Metanoia Residence. 
                I sit on panel discussions and facilitate difficult, open, flat structured dialogues. 
                My writing comes from the need for black African women to write and preserve their own herstories and ensure that the narratives of 
                black African woman are authentic, real and entirely their own. 
                My participation as a contributing author to the Nasty Women Talk Back book project is a key example of this.
                For more information on the NWTB project, go here.
                I write and perform protest poetry in my spare time.
                <br/><br/>
                For booking inquiries please go to contact page.
            </p>  

            <a href="https://parkupp.co.za" target="_blank">
              {/*<img className="parkupp-img" src={require("../../../Assets/Images/work/parkupp.png")}/>*/}
            </a>
        </div>
    )}
}