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
            <p><strong>Xenophobia Poem</strong></p>
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

            <p><strong>YOU'RE IN CHAINS TOO solidarity concert performance</strong></p>
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

            <p><strong>African Union Youth East and Southern Africa Regional Youth Consultation Interview</strong></p>
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

            <p><strong>Ted Talk</strong></p>
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

            <p><strong>Nasty Women Talk Back Book launch at Open Book Festival 2018</strong></p>
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
            
            <hr/>
            <h4>Instagram is my photo journal, follow me to see my pictures: @shanti_k</h4>
        </div>
    )}
}