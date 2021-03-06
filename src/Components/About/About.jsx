import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'

import './Styles/About.css'
import './Styles/AboutMobile.css'

import Landing from '../Landing/Landing'
import Work from '../Work/Work'
import Video from '../Video/Video'
import Contact from '../Contact/Contact'

import {aboutColumns} from '../../Animation/About'
import {workEnter} from '../../Animation/Work'
import {videoEnter} from '../../Animation/Video'
import {contactEnter} from '../../Animation/Contact'
import {Transition} from '../../Animation/Transition'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';



export default class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: true,
            work: false,
            video: false,
            contact: false,
            columns: false,
            transition: false,
            txContent: false,
            width: window.innerWidth
            
        };

        this.homeTransition = this.homeTransition.bind(this);
        this.workTransition = this.workTransition.bind(this);
        this.videoTransition = this.videoTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);       
    }


    componentDidMount() {                
        this.setState({columns: true, transition: false})            
        aboutColumns(
            this.aboutLeftCol, this.aboutRightColContent, 
            this.state.width, this.aboutStill, this.aboutLinkHome,
            this.aboutLink, this.aboutLinkWork, this.aboutLinkVideo, this.aboutLinkContact
        )
    }

    async homeTransition() {
        await this.setState({
            transition: true,
            txContent: true,                    
            home: true, 
            work: false,
            contact: false,
            video: false
        })
        //homeEnter(this.home)
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )

        setTimeout(() => {
            this.setState({about: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 2700)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async workTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,                     
            work: true,
            contact: false,
            video: false
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )        
        workEnter(this.workHome)
        
        setTimeout(() => {
            this.setState({about: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async videoTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,                     
            work: false,
            contact: false,
            video: true
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )        
        videoEnter(this.videoHome)
        
        setTimeout(() => {
            this.setState({about: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async contactTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false,                     
            work: false,
            contact: true,
            video: false
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        contactEnter(this.contactHome)

        setTimeout(() => {
            this.setState({about: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }


	render() {	
        const home = home => this.home = home
        const workHome = workHome => this.workHome = workHome
        const videoHome = videoHome => this.videoHome = videoHome
        const contactHome = contactHome => this.contactHome = contactHome

        const aboutLeftCol = aboutLeftCol => this.aboutLeftCol = aboutLeftCol
        const aboutRightColContent = aboutRightColContent => this.aboutRightColContent = aboutRightColContent
        const aboutStill = aboutStill => this.aboutStill = aboutStill

        const aboutLinkHome = aboutLinkHome => this.aboutLinkHome = aboutLinkHome
        const aboutLink = aboutLink => this.aboutLink = aboutLink
        const aboutLinkWork = aboutLinkWork => this.aboutLinkWork = aboutLinkWork
        const aboutLinkVideo = aboutLinkVideo => this.aboutLinkVideo = aboutLinkVideo
        const aboutLinkContact = aboutLinkContact => this.aboutLinkContact = aboutLinkContact

        const transitionFirst  = transitionFirst  => this.transitionFirst  = transitionFirst
        const transitionMain  = transitionMain  => this.transitionMain  = transitionMain
        const transitionSecond  = transitionSecond  => this.transitionSecond  = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx
    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.about?
                    <div style={{fontFamily: "Josefin Sans"}}>

                        <div ref={aboutLeftCol} className="aboutLeftCol" style={{display: this.state.columns?null:"none"}}>
                            <div className="aboutWhite">

                                <div ref={aboutStill} className="about-still">
                                    <h2>ABOUT</h2>
                                    <p className="learn"><b>Self actualization is the goal</b></p>
                                </div>
                                
                                <div className="aboutLinks">
                                    <div className="about-link-content">
                                        <p 
                                            className={this.state.homeHover?"about-link-hover":"aboutLink"}
                                            ref={aboutLinkHome} 
                                            onClick={this.homeTransition}
                                            onMouseEnter={() => this.setState({homeHover: !this.state.homeHover})}
                                            onMouseLeave={() => this.setState({homeHover: !this.state.homeHover})}>
                                            Home
                                        </p>
                                        <p 
                                            className={this.state.aboutHover||this.state.about?"about-link-hover":"aboutLink"}
                                            ref={aboutLink}
                                            onMouseEnter={() => this.setState({aboutHover: !this.state.aboutHover})}
                                            onMouseLeave={() => this.setState({aboutHover: !this.state.aboutHover})}>
                                            About
                                        </p>
                                        <p 
                                            className={this.state.workHover||this.state.work?"about-link-hover":"aboutLink"}
                                            ref={aboutLinkWork} 
                                            onClick={this.workTransition}
                                            onMouseEnter={() => this.setState({workHover: !this.state.workHover})}
                                            onMouseLeave={() => this.setState({workHover: !this.state.workHover})}>
                                            Work
                                        </p>
                                        <p 
                                            className={this.state.videoHover||this.state.video?"about-link-hover":"aboutLink"}
                                            ref={aboutLinkVideo} 
                                            onClick={this.videoTransition}
                                            onMouseEnter={() => this.setState({videoHover: !this.state.videoHover})}
                                            onMouseLeave={() => this.setState({videoHover: !this.state.videoHover})}>
                                            Videos
                                        </p>
                                        <p 
                                            className={this.state.contactHover||this.state.contact?"about-link-hover":"aboutLink"} 
                                            ref={aboutLinkContact} 
                                            onClick={this.contactTransition}
                                            onMouseEnter={() => this.setState({contactHover: !this.state.contactHover})}
                                            onMouseLeave={() => this.setState({contactHover: !this.state.contactHover})}>
                                            Contact
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aboutRightCol">
                            <div 
                                ref={aboutRightColContent} 
                                className="aboutRightColContent" 
                                style={{"-webkit-overflow-scrolling": "touch", display: this.state.columns?null:"none"}}>

                                <h2 className="heading">Ashanti Kunene</h2>
                                <h6>AFRICAN. EXTRA. INTELLIGENT. FEARLESS & GODLY.</h6>

                                <br/><br/>
                                
                                <h4 className="heading">Education</h4>
                                <hr/>
                                <p>
                                    Epworth Independent School for Girls, 2007<br/><br/>                                    
                                    Stellenbosch University, BA International Studies, 2015<br/><br/>
                                    Stellenbosch University, BA Honors International Studies Cum Laude, 2016<br/><br/>
                                    Bologna University, Global Studies and Critical Theory Summer School, June - July 2016.<br/> 
                                    Read about my experience <a href="http://blogs.sun.ac.za/summerschoolsblog/2016/07/23/ashanti-at-the-university-of-bologna/" target="_blank">here</a><br/><br/>
                                    Golden Key International Honour Society
                                                                        
                                </p>                                                                                                                            
                            </div>
                        </div>
                    </div>
                :null}
                
                {this.state.transition?
                    <div className="transition-container">
                        <div 
                            ref={transitionFirst} 
                            className="transition-first" 
                            >
                        </div>
                        <div ref={transitionMain} className="transition-main">
                            <div className="transition-content" style={{display: this.state.txContent?null:"none"}}>
                                <p ref={FnameTx} className="name-tx">ASHANTI</p>
                                <p ref={LnameTx} className="name-tx" style={{marginLeft: 5}}></p>
                                <p ref={learnTx} className="learn-tx">- AFRICAN -</p>
                            </div>
                        </div>
                        <div 
                            ref={transitionSecond}
                            className="transition-second" 
                            >
                        </div>
                    </div>
                :null}

                {this.state.home?   
                    <div ref={home} className="home">                 
                        <Landing />
                    </div>
                :null}

                {this.state.work?   
                    <div ref={workHome} className="workHome">                 
                        <Work />
                    </div>
                :null}

                {this.state.video?   
                    <div ref={videoHome} className="videoHome">                 
                        <Video />
                    </div>
                :null}

                {this.state.contact?   
                    <div ref={contactHome} className="contactHome">                 
                        <Contact />
                    </div>
                :null}
                
            </div>
		)
	}

}

