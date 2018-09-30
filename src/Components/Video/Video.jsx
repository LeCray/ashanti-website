import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/Video.css'
import './Styles/VideoMobile.css'

import {videoColumns} from '../../Animation/Video'
import {aboutEnter} from '../../Animation/About'
import {workEnter} from '../../Animation/Work'
import {Transition} from '../../Animation/Transition'

import Landing from '../Landing/Landing'
import About from '../About/About'
import Work from '../Work/Work'

import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';




export default class Video extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: false,
            work: false,
            video: true,
            contact: false,
            columns: false,
            transition: false,
            width: window.innerWidth
        }
            
        this.homeTransition = this.homeTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);       
        this.workTransition = this.workTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);
    }

    componentDidMount() {                
        this.setState({columns: true})            
        videoColumns(
            this.videoLeftCol, this.videoRightColContent, 
            this.state.width, this.videoStill, this.videoLinkHome,
            this.videoLinkAbout, this.videoLinkWork, this.videoLink
        )
    }

    async homeTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: true, 
            about: false,           
            work: false, 
            contact: false           
        })
        //homeEnter(this.home)
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )

        setTimeout(() => {
            this.setState({video: false})
        }, 1000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 2700)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async aboutTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false, 
            about: true,           
            work: false, 
            contact: false           
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        aboutEnter(this.aboutHome)

        setTimeout(() => {
            this.setState({video: false})
        }, 2000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 3000)
        setTimeout(() => {
            this.setState({transition: false})
        }, 3300)
    }
    async workTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: false, 
            about: false,           
            work: true,
            contact: false            
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        workEnter(this.workHome)

        setTimeout(() => {
            this.setState({video: false})
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
            about: false,           
            work: false,
            contact: true,            
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        workEnter(this.workHome)

        setTimeout(() => {
            this.setState({video: false})
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
        const aboutHome = aboutHome => this.aboutHome = aboutHome
        const workHome = workHome => this.workHome = workHome	

        const videoLeftCol = videoLeftCol => this.videoLeftCol = videoLeftCol
        const videoRightColContent = videoRightColContent => this.videoRightColContent = videoRightColContent 
        const videoStill = videoStill => this.videoStill = videoStill

        const videoLinkHome = videoLinkHome => this.videoLinkHome = videoLinkHome
        const videoLinkAbout = videoLinkAbout => this.videoLinkAbout = videoLinkAbout
        const videoLinkWork = videoLinkWork => this.videoLinkWork = videoLinkWork
        const videoLink = videoLink => this.videoLink = videoLink

        const transitionFirst  = transitionFirst  => this.transitionFirst  = transitionFirst
        const transitionMain  = transitionMain  => this.transitionMain  = transitionMain
        const transitionSecond  = transitionSecond  => this.transitionSecond  = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx
    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.video?

                    <div style={{fontFamily: "Josefin Sans"}}>

                        <div ref={videoLeftCol} className="videoLeftCol">
                            <div className="videoWhite">
                                <h2 ref={videoStill}>video</h2>                                
                                
                                <div className="videoLinks">
                                    <div className="video-link-content">
                                        <p 
                                            className={this.state.homeHover?"videoLinkHover":"videoLink"}
                                            ref={videoLinkHome} 
                                            onClick={this.homeTransition}
                                            onMouseEnter={() => this.setState({homeHover: !this.state.homeHover})}
                                            onMouseLeave={() => this.setState({homeHover: !this.state.homeHover})}>
                                            Home
                                        </p>
                                        <p 
                                            className={this.state.aboutHover||this.state.about?"videoLinkHover":"videoLink"}
                                            ref={videoLinkAbout}
                                            onClick={this.aboutTransition}
                                            onMouseEnter={() => this.setState({aboutHover: !this.state.aboutHover})}
                                            onMouseLeave={() => this.setState({aboutHover: !this.state.aboutHover})}>
                                            About
                                        </p>
                                        <p 
                                            className={this.state.workHover||this.state.work?"videoLinkHover":"videoLink"}
                                            ref={videoLinkWork}             
                                            onClick={this.workTransition}                            
                                            onMouseEnter={() => this.setState({workHover: !this.state.workHover})}
                                            onMouseLeave={() => this.setState({workHover: !this.state.workHover})}>
                                            Work
                                        </p>
                                        <p 
                                            className={this.state.videoHover||this.state.video?"videoLinkHover":"videoLink"} 
                                            ref={videoLink}                                     
                                            onMouseEnter={() => this.setState({videoHover: !this.state.videoHover})}
                                            onMouseLeave={() => this.setState({videoHover: !this.state.videoHover})}>
                                            video
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="videoRightCol">
                            <div
                                ref={videoRightColContent} 
                                className="videoRightColContent" 
                                style={{"-webkit-overflow-scrolling": "touch", display: this.state.columns?null:"none"}}>

                                <h4 className="video-heading">Looking forward to hearing from you!</h4>                            
                                <hr/>
                                <br/>
                                <h4 className="name-video">Ashanti Kunene</h4>
                                

                                <Row>
                                    <Col className="video-container" lg={6}>
                                        <h5 className="video-details">Email:</h5>                                        
                                    </Col>
                                    <Col className="video-container-2" lg={6}>
                                        <h5 className="video-details-2">ashantikunene123@gmail.com</h5>
                                    </Col>
                                </Row>
                                <img className="me-video" src={require("../../Assets/Images/shanti-grad.jpg")}/>

                            </div>
                        </div>
                    </div>
                :null}

                <div className="transition-container" style={{display: this.state.transition?null:"none"}}>
                    <div 
                        ref={transitionFirst} 
                        className="transition-first" 
                        >
                    </div>
                    <div ref={transitionMain} className="transition-main">
                        <div className="transition-content" style={{display: this.state.txContent?null:"none"}}>
                            <p ref={FnameTx} className="name-tx">A</p>
                            <p ref={LnameTx} className="name-tx" style={{marginLeft: 5}}>K</p>
                            <p ref={learnTx} className="learn-tx">- FEARLESS -</p>
                        </div>
                    </div>
                    <div 
                        ref={transitionSecond}
                        className="transition-second" 
                        >
                    </div>
                </div>

                {this.state.home?   
                    <div ref={home} className="home">                 
                        <Landing />
                    </div>
                :null}


                {this.state.about?   
                    <div ref={aboutHome} className="aboutHome">                 
                        <About />
                    </div>
                :null}
                
                {this.state.work?   
                    <div ref={workHome} className="workHome">                 
                        <Work />
                    </div>
                :null}
            </div>
		)
	}

}

