import React from 'react'
import './values.css'
import { Link } from "react-router-dom";
import image from '../images/LotusTitle.png';
import img1 from '../images/stream.png'
import img2 from '../images/peer.png';
import img3 from '../images/listen.png';
import img4 from '../images/collaborative.png';
import img5 from '../images/playlists.png';
// import img6 from '../images/rahad.png';



const Values = () => {
    return(
        <div id="Values">
            <nav className="navbar shadow-5">
      <div className="nav-logo-ctr">
       <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"> About us </li></Link>
        <Link to="Contact"><li className="nav-itm grow"> Contact </li></Link>

      </ul>
    </nav>
    <div className="v-container">
        <div className="v-title-ctn one">
        <h1> Features</h1>
        <p className="v-title-text"> It's not just another app. It's an <i> experience</i> </p>
        </div>

        <div className="v-board-ctn">
        <h1 className="vb-title"> Enjoy cross platform sharing, peer-to-peer discovery, collaborative playlist, and more.  </h1>
        </div>
    </div>

<div className="ctn">
             <div className="v-content-ctn ">
                 <div className="va-icon grow">
                     <img className="v-cp hide" alt="img1" src={img1}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Cross-Platform music sharing
                     </h1>
                     <p className="v-info-text">
                     Share music with friends with the click of a button, even between streaming services    </p>
                   
                     
          
              
             </div>

         </div>







    
             <div className="v-content-ctn-rv ">
                 <div className="v-icon grow">
                 <img className="v-cp img-2 hide" alt="img1" src={img2}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Peer-to-peer Music Discovery
                     </h1>
                     <p className="v-info-text">
                     See what your friends are listening to and stay up to date on the hottest songs    </p>
                    
                 </div>


         </div>



    
             <div  className="v-content-ctn">
                 <div className="va-icon grow">
                     <img className="v-cp hide"  alt="img1" src={img3}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Listen Together
                     </h1>
                     <p className="v-info-text">
                     Stream music simultaneously in groups to stay connected during a workout or to let everyone be on aux.  </p>
                   
                     
                 </div>

         </div>





    
             <div className="v-content-ctn-rv ">
                 <div className="va-icon grow">
                     <img className="v-cp hide" alt="img1" src={img4}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Collaborative Playlists
                     </h1>
                     <p className="v-info-text">
                     Create collaborative playlists with all of your friends. </p>               
                    
                 </div>

         </div>



    
             <div className="v-content-ctn" >
                 <div className="va-icon grow">
                     <img className="v-cp hide"  alt="img1"src={img5}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Show the world your interests
                     </h1>
                     <p className="v-info-text">
                     Show off your music taste with a profile of all your favorite songs, artists, and playlists. </p>                   
                   
                 </div>
              


         </div>


     
         </div>


        </div>
    )
}

export default Values;