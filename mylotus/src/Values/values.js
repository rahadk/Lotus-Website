import React from 'react'
import './values.css'
import { Link } from "react-router-dom";
import image from '../images/LotusTitle.png';
import img1 from '../images/stream.png'
import img2 from '../images/pr.png';
import img3 from '../images/listen.png';
import img4 from '../images/collaborative.png';
import img5 from '../images/playlists.png';



const Values = () => {
    return(

<div id="Features">

    {/* Navigation Bar */}
    <nav className="navbar shadow-5">
      <div className="nav-logo-ctr">
        <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"> About us </li></Link>
        <Link to="Contact"><li className="nav-itm grow"> Contact </li></Link>
      </ul>
    </nav>


     {/* Features  Header Rendering */}
    <div className="f-ctn">
        <div className="f-section-header">
        <h1 className="f-section-header-title"> Features</h1>
        <p className="f-section-header-subtext"> It's not just another app. It's an <i> experience</i> </p>
        </div>

        <div className="f-section-header-sub">
        <h1 className="f-section-header-sub-txt"> Enjoy cross platform sharing, peer-to-peer discovery, collaborative playlist, and more.  </h1>
        </div>
    </div>



    {/*  Features Content Container Renderings */}
    <div className="f-content-ctn">

        <div className="features-content-ctn">
            <div className="f-icon grow">
                <img className="f-image" alt="Lotus has cross platform music sharing capabilities" src={img1}></img>
            </div>
            <div className="f-info">
                <h1 className="f-info-header"> Cross-Platform music sharing </h1>
                <p className="f-info-text"> Share music with friends with the click of a button, even between streaming services</p>
             </div>
        </div>

        <div className="feature">
            <div className="f-icon grow">
                <img className="f-image" alt="Offering peer-to-peer musical discovery" src={img2}></img>
            </div>
            <div className="f-info">
                <h1 className="f-info-header"> Peer-to-peer Music Discovery </h1>
                <p className="f-info-text"> See what your friends are listening to and stay up to date on the hottest songs    </p>
            </div>
         </div>
    
        <div  className="features-content-ctn">
            <div className="f-icon grow">
                <img className="f-image"  alt="You can stream music silultanerously with your friends" src={img3}></img>
            </div>
            <div className="f-info">
                 <h1 className="f-info-header"> Listen Together </h1>
                 <p className="f-info-text"> Stream music simultaneously in groups to stay connected during a workout or to let everyone be on aux.  </p>
             </div>
        </div>

        <div className="feature">
            <div className="f-icon grow">
                <img className="f-image" alt="You can create collaborative playlists with all of your friends" src={img4}></img> </div>
            <div className="f-info">
                <h1 className="f-info-header"> Collaborative Playlists </h1>
                 <p className="f-info-text"> Create collaborative playlists with all of your friends. </p>               
            </div>
         </div>

        <div className="features-content-ctn" >
            <div className="f-icon grow">
                 <img className="f-image"  alt="You can show off your music taste with a profile of your favorite songs"src={img5}></img> 
             </div>
            <div className="f-info">
                <h1 className="f-info-header"> Show the world your interests </h1>
                <p className="f-info-text"> Show off your music taste with a profile of all your favorite songs, artists, and playlists. </p>                   
            </div>
        </div>
        
    </div>

</div>
    )
}

export default Values;