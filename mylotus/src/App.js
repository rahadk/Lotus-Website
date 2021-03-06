import React from 'react';
import './App.css';
import 'tachyons'
import Home from './Home/Home';
import navimg from './images/navbar-lotus-logo.png';
import navsun from './images/navbar-lotus-sun.png';
import Contact from './Contact/Contact';
import About from './About/About';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";



function App({location}) {
  return (
<Wrapper>


	<header className="navigation-header">
       <ul className="navigation-items-container">
       <img id="nav-flower" src={navsun}></img>
       <Link to="/" id="logoLink">  <img id="nav-logo" src={navimg}></img></Link>
       <Link to="/about"> <li className="nav-item navBarLink"><a href="#Home"> About Us </a></li></Link>
       <Link to="/contact" id="contactLink"> <li className="nav-item navBarLink"><a href="#About"> Contact Us </a></li></Link>

        </ul>
      </header> 

      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
             <Route path="/contact" exact component={Contact} />
            </Switch>
            </section>
            </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active { 
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(App);
