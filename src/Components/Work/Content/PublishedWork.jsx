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




export class PublishedWork extends Component {
  componentDidMount() {
      window.scrollTo(0, 0)
    }

  render() {
    return (
        <div>
            <h2 className="heading" style={{color: "#737373"}}>Published Work</h2>            

            <div className="market-logo-container">
              {/*<img className="market-logo" src={require("../../../Assets/Images/work/market.png")}/>*/}
            </div>

            <p className="money-calls-content">                
                <ul>                              
                  <li><a href="https://www.ijr.org.za/2017/06/29/internalised-racism-thoughts-on-the-intersections-of-oppression/" target="_blank">Internalised Racism Thoughts on the Intersections of Oppression</a></li>
                  <li><a href="http://www.ijr.org.za/2017/11/07/the-genocide-of-the-rohingya-people-are-we-too-accustomed-to-injustice/" target="_blank">the-genocide-of-the-rohingya-people-are-we-too-accustomed-to-injustice</a></li>
                  <li><a href="http://www.ijr.org.za/2017/11/07/black-women-and-the-struggle-marginalization-poverty-and-patriarchy/" target="_blank">black-women-and-the-struggle-marginalization-poverty-and-patriarchy</a></li>
                  <li><a href="http://www.news24.com/Columnists/GuestColumn/speaking-to-our-parents-how-is-this-freedom-20170817" target="_blank">speaking-to-our-parents-how-is-this-freedom</a></li>
                  <li><a href="http://www.news24.com/Columnists/GuestColumn/blacks-with-access-may-not-plead-ignorance-20171012" target="_blank">blacks-with-access-may-not-plead-ignorance</a></li>
                  <li><a href="http://www.news24.com/Columnists/GuestColumn/if-we-insist-on-violence-at-home-we-cant-complain-about-a-violentsociety-20171031" target="_blank">if-we-insist-on-violence-at-home-we-cant-complain-about-a-violentsociety</a></li>
                  <li><a href="https://www.news24.com/Columnists/GuestColumn/practicising-your-politics-in-a-patriarchal-world-20171129" target="_blank">practicising-your-politics-in-a-patriarchal-world</a></li>
                  <li><a href="https://www.dailymaverick.co.za/opinionista/2017-05-04-the-illusion-of-my-south-african-freedom/#.WZK_BP-GM0Q" target="_blank">the-illusion-of-my-south-african-freedom</a></li>
                  <li><a href="https://www.dailymaverick.co.za/opinionista/2017-07-25-let-the-african-youth-craft-a-different-space-for-africa-on-theworld-stage/#.WZK_HP-GM0Q" target="_blank">let-the-african-youth-craft-a-different-space-for-africa-on-theworld-stage</a></li>
                  <li><a href="https://www.dailymaverick.co.za/article/2017-07-04-op-ed-africa-must-assert-itself-in-the-remaking-of-the-world-order/" target="_blank">op-ed-africa-must-assert-itself-in-the-remaking-of-the-world-order</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/the-black-monday-protest-has-elicited-polarisedopinion_a_23261687/?utm_hp_ref=za-voices" target="_blank">the-black-monday-protest-has-elicited-polarisedopinion</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/the-rainbow-nation-made-us-believe-that-even-within-our-differenceswe-are-equal-but-we-are-not_a_23079188/" target="_blank">the-rainbow-nation-made-us-believe-that-even-within-our-differenceswe-are-equal-but-we-are-not</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/gender-based-violence-is-a-ticking-time-bomb_a_23201453/" target="_blank">gender-based-violence-is-a-ticking-time-bomb</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/we-cannot-afford-to-have-leaders-that-do-not-read_a_23229279/" target="_blank">we-cannot-afford-to-have-leaders-that-do-not-read</a></li>
                  <li><a href="https://www.gate5.co.za/read/83459/qv/53139607/14839133/92846/p" target="_blank">Cape Talk Radio Interview on Op-Ed: </a></li>
                </ul>
                {/*<img className="money-calls-img" src={require("../../../Assets/Images/work/money-calls.png")}/>*/}
            </p>            
        </div>
    )}
}