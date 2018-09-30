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

import YouTubePlayer from 'react-player/lib/players/YouTube'
import VimeoPlayer from 'react-player/lib/players/Vimeo'


export default class Videos extends Component {

    render() {
    return (
        <div >
            {/*<h2 ref={(section)=>{this.DataAnalyticsSlide = section;}} className="heading" style={{color: "#737373"}}>Brands Eye</h2>*/}
            <p className="video-headings">Xenophobia Poem</p>
            <div class="video" style={{margin: "0 auto",  backgroundColor: "white", paddingBottom: 50}}>
                <YouTubePlayer
                  url='https://www.youtube.com/watch?v=McFo6CQ0OIo'
                  className='react-player'                          
                  controls
                  loop
                  width='100%'
                  height='100%'
                />  
            </div>

            <p className="video-headings">YOU'RE IN CHAINS TOO solidarity concert performance</p>
            <div class="video" style={{margin: "0 auto",  backgroundColor: "white", paddingBottom: 50}}>
                <VimeoPlayer
                  url='https://vimeo.com/193038316'
                  className='react-player'                          
                  controls
                  loop
                  width='100%'
                  height='100%'
                />  
            </div>

            <p className="video-headings">African Union Youth East and Southern Africa Regional Youth Consultation Interview</p>
            <div class="video" style={{margin: "0 auto",  backgroundColor: "white", paddingBottom: 50}}>
                <YouTubePlayer
                  url='https://www.youtube.com/watch?v=-3rlTMX44PE'
                  className='react-player'                          
                  controls
                  loop
                  width='100%'
                  height='100%'
                />  
            </div>

            <p className="video-headings">Ted Talk</p>
            <div class="video" style={{margin: "0 auto",  backgroundColor: "white", paddingBottom: 50}}>
                <YouTubePlayer
                  url='https://www.youtube.com/watch?v=6YiMDFok2yU'
                  className='react-player'                          
                  controls
                  loop
                  width='100%'
                  height='100%'
                />  
            </div>

            <p className="video-headings">Nasty Women Talk Back Book launch at Open Book Festival 2018</p>
            <div class="video" style={{margin: "0 auto",  backgroundColor: "white", paddingBottom: 50}}>
                <YouTubePlayer
                  url='https://www.youtube.com/watch?v=j_YJRtZa4KU&t=776s'
                  className='react-player'                          
                  controls
                  loop
                  width='100%'
                  height='100%'
                />  
            </div>

        </div>
    )}
}