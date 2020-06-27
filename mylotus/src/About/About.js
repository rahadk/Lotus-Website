import React from 'react'
import './About.css'
import image from '../images/LotusTitle.png'
import { Link } from "react-router-dom";
import img1 from '../images/mission.png'
import img2 from '../images/vlotus.png';
import img3 from '../images/name.png';
import img4 from '../images/process.png';
import img5 from '../images/ben.png';
import img6 from '../images/rahad.png';
import Home from '../Home/Home';


const About = () => {
return(
<div id="About">
<div className="background-a"></div>
    {/* Navigation Menu */}
    <nav className="navbar shadow-5">
      <div className="nav-logo-ctr">
       <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"> About us </li></Link>
        <Link to="Features"><li className="nav-itm grow"> Features </li></Link>
        <Link to="Contact"><li className="nav-itm grow"> Contact </li></Link>
        <li className="nav-btn grow br4 "><a href="https://mailchi.mp/587a0b5c40b7/lotus"> Sign up </a></li>

      </ul>
    </nav>
    <div className="v-container">
        <div className="v-title-ctn one">
        <h1 className="v-title"> We Are Lotus</h1>
        <p className="v-title-text"> What is Lotus and who we <i> are.</i> </p>
        </div>

        <div className="v-board-ctn">
        </div>
    </div>

<div className="values">
         <div className="v-flex-ctn">
             <div className="v-content-ctn shadow-5">
                 <div className="v-icon grow">
                     <img className="v-cp" alt="img1" src={img1}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                         The Mission
                     </h1>
                     <p className="v-info-text">
                     To create a platform where users can discover, experience, and share all of their favorite music from a wide range of services in one location.                     </p>
                     <p className="v-info-text">
                     A Vision: A world united through music.                     </p>
                   
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>

         <div className="v-flex-ctn">
             <div className="v-content-ctn-rv shadow-5">
                 <div className="v-icon grow">
                 <img className="v-cp" alt="img1" src={img2}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                         The Story
                     </h1>
                     <p className="v-info-text">
                     More and more these days, people are trying to share music on social media. This normally comes in the form of a screenshot on Instagram or Snapchat or a link on Facebook or Twitter.While this is great for sharing, people looking to listen to the song, add it to a playlist, or share with their friends must go to a different service and find it themselves.                      </p>
                     <p className="v-info-text">

                     Furthermore, with the streaming market being segmented between Apple Music, Spotify, and a list of the streaming services, users can only interact with other users of the same service such as listening to a playlist created on only one service. And thus Lotus was born. Lotus is a social networking platform focused on sharing music that addresses their problems and many more.
                     </p>
                    
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>


         <div className="v-flex-ctn">
             <div className="v-content-ctn shadow-5">
                 <div className="v-icon grow">
                     <img className="v-cp" alt="img1" src={img3}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                         The Name
                     </h1>
                     <p className="v-info-text">  We chose the lotus flower as our core symbol for a few reasons: </p>
                     <p className="v-info-text">
1. It ends in the word “us” which emphasizes the social nature of the platform
                     </p>
                     <p className="v-info-text">
                     2. In eastern religions, the lotus flower represents rebirth and enlightenment, which is what we are trying to do to music sharing                     </p>
                     <p className="v-info-text">
                     3. As a water dwelling flower, the lotus can compliment a stream, similar to how we are trying to compliment streaming services
                     </p>
                     <p className="v-info-text">
                     4. Despite only growing in the mud, the lotus flower blooms into something beautiful, representing how we will continue to grow despite any challenges come our way                     </p>
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>

         <div className="v-flex-ctn">
             <div className="v-content-ctn-rv shadow-5">
                 <div className="v-icon grow">
                 <img className="v-cp" alt="img1" src={img4}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                         The Process
                     </h1>
                     <p className="v-info-text">
                     After starting in January 2019, we have been able to validate our idea and begin developing the Beta version of the app. We continue to work day in and day out and hope to be on the market by the end of summer 2020. If there was ever a time where the world needed to be connected virtually through music, it's now.                     </p>
                   
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>



         <div className="v-flex-ctn">
             <div className="v-content-ctn shadow-5">
                 <div className="v-icon grow ">
                     <img className="v-cp-team" alt="img1" src={img5}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                         Ben Salazar
                     </h1>
                     <h3> Cofounder/CEO</h3>
                     <p className="v-info-text">
                     Ben is a pre-med student at Johns Hopkins University who hopes to pursue a career as a doctor one day. Mostly focusing on science courses during his time in school, he found his love for business during his freshman year in college when he decided to pick up an entrepreneurship minor and started taking business classes.                     </p>
                     <p className="v-info-text">
                     He started Lotus with high school football teammate and long time friend Rahad in order to share his love of music with all of his friends. His music interests include everything from house music and rap to rock and roll. In his free time, Ben enjoys playing the guitar, reading, and playing football with his friends.                     </p>
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>

              
     <div className="v-flex-ctn">
             <div className="v-content-ctn pinkk">
                 <div className="v-icon grow v-icon-team">
                     <img className="v-cp-team" alt="img1" src={img6}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                         Rahad Khan
                     </h1>
                     <h2> Cofounder/COO </h2>
                     <p className="v-info-text">
                     Rahad is a cofounder of Lotus who has a passion for technology and media. At an early age, he took a great interest in small gadgets, breaking them apart and fixing them to figure out how they work. He is a tech wiz amongst family and friends, often helping to fix their computers; he even started his own computer repair business at the age of 10. 
                     </p>
                     <p className="v-info-text">
                     In the following years, Rahad would dream of starting a business of his own. He started this journey earlier than expected as a senior in high school when he joined his long time friend Ben to start Lotus.                     </p>
                  
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>
     </div>



        <div className="v-reach-ctn">
            <h2 className="v-reach-head">
                Do you like what you saw? 
            </h2>
            <p> Click the button below to stay updated!</p>
           <div className="v-updated-btn">
           <a className="v-btn" href="https://mailchi.mp/587a0b5c40b7/lotus">
               Stay updated
               </a>
            </div> 
        </div>


    </div>
)
}

export default About;