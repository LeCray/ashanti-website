import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/Work.css'
import './Styles/WorkMobile.css'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';

import Landing from '../Landing/Landing'
import About from '../About/About'
import Contact from '../Contact/Contact'

import {PSWP} from './Content/PSWP'
import {PublishedWork} from './Content/PublishedWork'
import {DataAnalytics} from './Content/DataAnalytics'



export default class WorkMobile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: false,
            work: true,
            contact: false,
            
            madMobile:true,
            pswp: false,
            moneyCalls: false,
            DataAnalytics: false,            
        };

        this.madMobile = this.madMobile.bind(this);
        this.pswp = this.pswp.bind(this);
        this.moneyCalls = this.moneyCalls.bind(this);
        this.DataAnalytics = this.DataAnalytics.bind(this);

        this.homeTransition = this.homeTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);  
        this.contactTransition = this.contactTransition.bind(this);
    }

    madMobile() {
        this.setState({
            madMobile:true,
            pswp: false,
            moneyCalls: false,
            DataAnalytics: false,
        })
    }
    pswp() {
        this.setState({
            pswp: true,
            madMobile:false,
            moneyCalls: false,
            DataAnalytics: false,
        })
    }
    moneyCalls() {
        this.setState({
            moneyCalls: true,
            pswp: false,
            madMobile:false,
            DataAnalytics: false,
        })
    }
    DataAnalytics() {
        this.setState({
            DataAnalytics: true,
            moneyCalls: false,
            pswp: false,
            madMobile:false,
        })
    }

    async homeTransition() {
        await this.setState({
            home: true, 
            about: false,           
            work: false,
            contact: false
        })
        //homeEnter(this.home)
    }
    async aboutTransition() {
        await this.setState({
            home: false, 
            about: true,           
            work: false,
            contact: false
        })
        //homeEnter(this.home)
    }
    async contactTransition() {
        await this.setState({
            home: false, 
            about: false,           
            work: false,
            contact: true
        })
        //workEnter(this.workHome)
    }
       

	render() {		
        const home = home => this.home = home
        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const contactHome = contactHome => this.contactHome = contactHome   
    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                
                    <div style={{fontFamily: "Josefin Sans"}}>
                    <div className="work-left-col">
                        <div className="work-left-col-content">
                            <h2>WORK</h2>
                            {/*<hr className="workHr"/>*/}
                            <div className="work-intra-links">
                                <p className="work-link" style={{marginLeft: 0}} onClick={()=>scrollToComponent(this.mad,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>MAD Mobile</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.pswp,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>pswp</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.moneycalls,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>Money Calls</p>
                                <p className="work-link" onClick={()=>scrollToComponent(this.DataAnalytics,{offset:-45,align:'top',ease:'inOutCirc',duration:1500})}>DataAnalytics</p>
                            </div>                           
                        </div>
                    </div>

                    <div className="work-right-col">
                        <div className="work-right-col-content" style={{"-webkit-overflow-scrolling": "touch"}}>
 
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.pswp = section;}} className="work-content-mobile">
                                <PSWP />
                            </div>
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.PublishedWork = section;}} className="work-content-mobile">
                                <PublishedWork />
                            </div>
                            <hr className="work-hr"/>
                            <div ref={(section)=>{this.DataAnalytics = section;}} className="work-content-mobile">
                                <DataAnalytics />
                            </div>
                          
                        </div>
                    </div>
                </div>
                
            </div>
		)
	}

}

