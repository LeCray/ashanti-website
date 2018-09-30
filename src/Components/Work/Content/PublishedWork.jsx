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
                  <li><a href="http://www.ijr.org.za/2017/11/07/the-genocide-of-the-rohingya-people-are-we-too-accustomed-to-injustice/" target="_blank">The Genocide of the Rohingya People are we too Accustomed to Injustice</a></li>
                  <li><a href="http://www.ijr.org.za/2017/11/07/black-women-and-the-struggle-marginalization-poverty-and-patriarchy/" target="_blank">Black Women and the Struggle Marginalization Poverty and Patriarchy</a></li>
                  <li><a href="http://www.news24.com/Columnists/GuestColumn/speaking-to-our-parents-how-is-this-freedom-20170817" target="_blank">Speaking to our Parents How is this Freedom</a></li>
                  <li><a href="http://www.news24.com/Columnists/GuestColumn/blacks-with-access-may-not-plead-ignorance-20171012" target="_blank">Blacks with Access May Not Plead Ignorance</a></li>
                  <li><a href="http://www.news24.com/Columnists/GuestColumn/if-we-insist-on-violence-at-home-we-cant-complain-about-a-violentsociety-20171031" target="_blank">If We Insist On Violence At Home We Cant Complain About a Violentsociety</a></li>
                  <li><a href="https://www.news24.com/Columnists/GuestColumn/practicising-your-politics-in-a-patriarchal-world-20171129" target="_blank">Practicising Your Politics in a Patriarchal World</a></li>
                  <li><a href="https://www.dailymaverick.co.za/opinionista/2017-05-04-the-illusion-of-my-south-african-freedom/#.WZK_BP-GM0Q" target="_blank">The Illusion Of My South African Freedom</a></li>
                  <li><a href="https://www.dailymaverick.co.za/opinionista/2017-07-25-let-the-african-youth-craft-a-different-space-for-africa-on-theworld-stage/#.WZK_HP-GM0Q" target="_blank">Let the African Youth Craft a Different Space for Africa on Theworld Stage</a></li>
                  <li><a href="https://www.dailymaverick.co.za/article/2017-07-04-op-ed-africa-must-assert-itself-in-the-remaking-of-the-world-order/" target="_blank">Op Ed Africa Must Assert Itself in the Remaking of the World Order</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/the-black-monday-protest-has-elicited-polarisedopinion_a_23261687/?utm_hp_ref=za-voices" target="_blank">The Black Monday Protest Has Elicited Polarisedopinion</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/the-rainbow-nation-made-us-believe-that-even-within-our-differenceswe-are-equal-but-we-are-not_a_23079188/" target="_blank">The Rainbow Nation Made Us Believe That Even Within Our Differenceswe Are Equal But We Are Not</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/gender-based-violence-is-a-ticking-time-bomb_a_23201453/" target="_blank">Gender Based Violence is a Ticking Time Bomb</a></li>
                  <li><a href="http://www.huffingtonpost.co.za/ashanti-kunene/we-cannot-afford-to-have-leaders-that-do-not-read_a_23229279/" target="_blank">We Cannot Afford To Have Leaders That Do Not Read</a></li>
                  <li><a href="https://www.gate5.co.za/read/83459/qv/53139607/14839133/92846/p" target="_blank">Cape Talk Radio Interview on Op-Ed</a></li>
                </ul>
                {/*<img className="money-calls-img" src={require("../../../Assets/Images/work/money-calls.png")}/>*/}
            </p>            
        </div>
    )}
}