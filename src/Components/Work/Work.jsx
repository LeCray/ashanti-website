import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron} from 'react-bootstrap';

import { Dots, Digital } from 'react-activity';
import 'react-activity/dist/react-activity.css';    
import { Link } from 'react-router-dom'


import './Styles/Work.css'
import './Styles/WorkMobile.css'

import {workColumns,drop,switchTo} from '../../Animation/Work'
import {aboutEnter} from '../../Animation/About'
import {contactEnter} from '../../Animation/Contact'
import {videoEnter} from '../../Animation/Video'
import {Transition} from '../../Animation/Transition'


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";
import scrollToComponent from 'react-scroll-to-component';

import Landing from '../Landing/Landing'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Video from '../Video/Video'


import {PSWP} from './Content/PSWP'
import {PublishedWork} from './Content/PublishedWork'
import {DataAnalytics} from './Content/DataAnalytics'



export default class Work extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            about: false,
            work: true,
            video: false,
            contact: false,
            columns: false,
            DataAnalytics: true,            
            pswp: false,
            publishedWork: false,
            transition: false, 
            txContent: false,                                 
            width: window.innerWidth          
        };
        
        this.pswp = this.pswp.bind(this);
        this.publishedWork = this.publishedWork.bind(this);
        this.DataAnalytics = this.DataAnalytics.bind(this);

        this.homeTransition = this.homeTransition.bind(this);
        this.aboutTransition = this.aboutTransition.bind(this);  
        this.videoTransition = this.videoTransition.bind(this);
        this.contactTransition = this.contactTransition.bind(this);

        
    }

    componentDidMount() {                
        this.setState({columns: true})            
        workColumns(
            this.workLeftCol, this.workRightColContent, 
            this.state.width, this.workStill, this.workLinkHome,
            this.workLinkAbout, this.workLink, this.workLinkVideo, this.workLinkContact,
            this.pswpSlide, this.publishedWorkSlide, this.DataAnalyticsSlide
        )
    }

    pswp() {
        switchTo(this.workRightColContent)    
        setTimeout(() => {
            this.setState({
                pswp: true,
                madMobile:false,
                publishedWork: false,
                DataAnalytics: false,
            })                
        }, 500)        
    }
    publishedWork() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                publishedWork: true,
                pswp: false,
                madMobile:false,
                DataAnalytics: false,
            })
        }, 500)        
    }
    DataAnalytics() {
        switchTo(this.workRightColContent)
        setTimeout(() => {
            this.setState({
                DataAnalytics: true,
                publishedWork: false,
                pswp: false,
                madMobile:false,
            })
        }, 500)        
    }

    async homeTransition() {
        await this.setState({
            transition: true,
            txContent: true,
            home: true, 
            about: false,                       
            contact: false
        })
        //homeEnter(this.home)
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )

        setTimeout(() => {
            this.setState({work: false})
        }, 1000)
        setTimeout(() => {
            this.setState({txContent: false})
        }, 2000)
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
            contact: false
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        aboutEnter(this.aboutHome)

        setTimeout(() => {
            this.setState({work: false})
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
            about: false,
            video: true,
            contact: false
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        videoEnter(this.videoHome)

        setTimeout(() => {
            this.setState({work: false})
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
            contact: true
        })
        Transition(
            this.transitionFirst, this.transitionMain, 
            this.transitionSecond,this.FnameTx,this.LnameTx, 
            this.state.width, this.learnTx
        )
        contactEnter(this.contactHome)

        setTimeout(() => {
            this.setState({work: false})
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
        const contactHome = contactHome => this.contactHome = contactHome
        const videoHome = videoHome => this.videoHome = videoHome  
        
        const workLeftCol = workLeftCol => this.workLeftCol = workLeftCol
        const workRightColContent = workRightColContent => this.workRightColContent = workRightColContent 
        const workStill = workStill => this.workStill = workStill

        const workLinkHome = workLinkHome => this.workLinkHome = workLinkHome
        const workLink = workLink => this.workLink = workLink
        const workLinkAbout = workLinkAbout => this.workLinkAbout = workLinkAbout
        const workLinkContact = workLinkContact => this.workLinkContact = workLinkContact
        const workLinkVideo = workLinkVideo => this.workLinkVideo = workLinkVideo

        const transitionFirst  = transitionFirst  => this.transitionFirst  = transitionFirst
        const transitionMain  = transitionMain  => this.transitionMain  = transitionMain
        const transitionSecond  = transitionSecond  => this.transitionSecond  = transitionSecond
        const FnameTx = FnameTx => this.FnameTx = FnameTx
        const LnameTx = LnameTx => this.LnameTx = LnameTx
        const learnTx = learnTx => this.learnTx = learnTx
                
        const pswpSlide = pswpSlide => this.pswpSlide = pswpSlide
        const publishedWorkSlide = publishedWorkSlide => this.publishedWorkSlide = publishedWorkSlide
        const DataAnalyticsSlide = DataAnalyticsSlide => this.DataAnalyticsSlide = DataAnalyticsSlide
    
		return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet"/>
                {this.state.work?

                    <div style={{fontFamily: "Josefin Sans"}}>

                    <div ref={workLeftCol} className="workLeftCol" style={{display: this.state.columns?null:"none"}}>
                        <div className="workLeftColContent">
                            <div ref={workStill}> 
                                <h2>WORK</h2>
                                
                                <div className="work-intra-links">
                                    <p 
                                        className={this.state.DataAnalyticsHover||this.state.DataAnalytics?"workLinkHover":"workLink"}
                                        ref={DataAnalyticsSlide} 
                                        style={{marginLeft: 0}} 
                                        onMouseEnter={() => this.setState({DataAnalyticsHover: !this.state.DataAnalyticsHover})}
                                        onMouseLeave={() => this.setState({DataAnalyticsHover: !this.state.DataAnalyticsHover})} 
                                        onClick={this.DataAnalytics}>
                                        Data Analytics
                                    </p><br/>
                                    <p 
                                        className={this.state.pswpHover||this.state.pswp?"workLinkHover":"workLink"}
                                        ref={pswpSlide}
                                        onMouseEnter={() => this.setState({pswpHover: !this.state.pswpHover})}
                                        onMouseLeave={() => this.setState({pswpHover: !this.state.pswpHover})} 
                                        onClick={this.pswp}>
                                        Public Speaking, Writing & Poetry
                                    </p><br/>
                                    <p 
                                        className={this.state.publishedWorkHover||this.state.publishedWork?"workLinkHover":"workLink"}
                                        ref={publishedWorkSlide}
                                        onMouseEnter={() => this.setState({publishedWorkHover: !this.state.publishedWorkHover})}
                                        onMouseLeave={() => this.setState({publishedWorkHover: !this.state.publishedWorkHover})} 
                                        onClick={this.publishedWork}>
                                        Published Work
                                    </p>                                    
                                </div>
                            </div>

                            <div 
                                className="workLinks">
                                <div className="work-link-content">
                                    <p 
                                        className={this.state.homeHover?"workLinkHover":"workLink"}
                                        ref={workLinkHome} 
                                        onClick={this.homeTransition}
                                        onMouseEnter={() => this.setState({homeHover: !this.state.homeHover})}
                                        onMouseLeave={() => this.setState({homeHover: !this.state.homeHover})}>
                                        Home
                                    </p>
                                    <p 
                                        className={this.state.aboutHover||this.state.about?"workLinkHover":"workLink"}
                                        ref={workLinkAbout}
                                        onClick={this.aboutTransition}
                                        onMouseEnter={() => this.setState({aboutHover: !this.state.aboutHover})}
                                        onMouseLeave={() => this.setState({aboutHover: !this.state.aboutHover})}>
                                        About
                                    </p>
                                    <p 
                                        className={this.state.workHover||this.state.work?"workLinkHover":"workLink"}
                                        ref={workLink}                                         
                                        onMouseEnter={() => this.setState({workHover: !this.state.workHover})}
                                        onMouseLeave={() => this.setState({workHover: !this.state.workHover})}>
                                        Work
                                    </p>
                                    <p 
                                        className={this.state.videoHover||this.state.video?"videoLinkHover":"videoLink"} 
                                        ref={workLinkVideo}
                                        onClick={this.videoTransition}
                                        onMouseEnter={() => this.setState({videoHover: !this.state.videoHover})}
                                        onMouseLeave={() => this.setState({videoHover: !this.state.videoHover})}>
                                        Videos
                                    </p>
                                    <p 
                                        className={this.state.contactHover||this.state.contact?"workLinkHover":"workLink"} 
                                        ref={workLinkContact} 
                                        onClick={this.contactTransition}
                                        onMouseEnter={() => this.setState({contactHover: !this.state.contactHover})}
                                        onMouseLeave={() => this.setState({contactHover: !this.state.contactHover})}>
                                        Contact
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="workRightCol">
                        <div 
                            ref={workRightColContent} 
                            className="workRightColContent" 
                            style={{"-webkit-overflow-scrolling": "touch", display: this.state.columns?null:"none"}}>
                                                       
                            <div className="scroller" style={{display: this.state.pswp?null:"none"}}>
                                <div>
                                    <PSWP />
                                </div>
                            </div>
                            <div className="scroller" style={{display: this.state.publishedWork?null:"none"}}>
                                <div>
                                    <PublishedWork />
                                </div>
                            </div>
                            <div className="scroller" style={{display: this.state.DataAnalytics?null:"none"}}>
                                <div>
                                    <DataAnalytics />
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>:null}

                <div className="transition-container" style={{display: this.state.transition?null:"none"}}>
                    <div 
                        ref={transitionFirst} 
                        className="transition-first" 
                        >
                    </div>
                    <div ref={transitionMain} className="transition-main" >
                        <div className="transition-content" style={{display: this.state.txContent?null:"none"}}>
                            <p ref={FnameTx} className="name-tx">ASHANTI</p>
                            <p ref={LnameTx} className="name-tx" style={{marginLeft: 5}}></p>
                            <p ref={learnTx} className="learn-tx">- INTELLIGENT -</p>
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

