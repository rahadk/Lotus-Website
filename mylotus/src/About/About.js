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
import img7 from '../images/vision.png';
import logo from "../images/Lotus.png"


const About = () => {
return(

<div id="About-section">

    {/* Navigation Menu */}
    <nav className="navbar">
      <div className="nav-logo-ctr">
       <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"> About us </li></Link>
        <Link to="Contact"><li className="nav-itm grow"> Contact </li></Link>

      </ul>
    </nav>

    
    {/* About Renderings */}
    

<div className="a-content">
    <div className="a-logo-ctn">
    <img className="a-logo" src={logo} alt="Lotus flower logo"></img>
    </div>
    <h1 className="a-title"> We Are Lotus</h1>    
    <div className="a-content-ctn grow">
        <div className="a-icon grow">
            <img className="a-image" alt=" Flag on top of mountain" src={img1}></img>
        </div>
        
    <div className="a-info">
        <h1 className="a-info-header"> Our Mission  </h1>
        <p className="a-info-subtext"> To create a platform where users can discover, experience, and share all of their favorite music from a wide range of services in one location.                     </p>
    </div>  
</div>

<div className="a-content-ctn-rv">
    <div className="a-icon grow">
        <img className="a-image-2" alt="binoculars" src={img7}></img>
    </div>
    <div className="a-info">
        <h1 className="a-info-header"> Our Vision </h1>
        <p className="a-info-subtext">  A world united through music. </p>
     </div>
 </div>

 <div className="a-content-ctn">
    <div className="a-icon grow">
        <img className="a-image" alt="Lotus flower icon" src={img2}></img>
    </div>
     <div className="a-info">
        <h1 className="a-info-header"> The Story  </h1>
        <p className="a-info-subtext"> More and more these days, people are trying to share music on social media. This normally comes in the form of a screenshot on Instagram or Snapchat or a link on Facebook or Twitter.While this is great for sharing, people looking to listen to the song, add it to a playlist, or share with their friends must go to a different service and find it themselves.                      </p>
        <p className="a-info-subtext"> Furthermore, with the streaming market being segmented between Apple Music, Spotify, and a list of the streaming services, users can only interact with other users of the same service such as listening to a playlist created on only one service. And thus Lotus was born. Lotus is a social networking platform focused on sharing music that addresses their problems and many more.</p>
    </div>
 </div>


     
             <div className="a-content-ctn-rv">
                 <div className="a-icon grow">
                     <img className="a-image" alt="Lightbulb in text bubble" src={img3}></img>
                 </div>
                 <div className="a-info">
                     <h1 className="a-info-header">
                         The Name
                     </h1>
                     <p className="a-info-subtext">  We chose the lotus flower as our core symbol for a few reasons: </p>
                     <p className="a-info-subtext">
1. It ends in the word “us” which emphasizes the social nature of the platform
                     </p>
                     <p className="a-info-subtext">
                     2. In eastern religions, the lotus flower represents rebirth and enlightenment, which is what we are trying to do to music sharing                     </p>
                     <p className="a-info-subtext">
                     3. As a water dwelling flower, the lotus can compliment a stream, similar to how we are trying to compliment streaming services
                     </p>
                     <p className="a-info-subtext">
                     4. Despite only growing in the mud, the lotus flower blooms into something beautiful, representing how we will continue to grow despite any challenges come our way                     </p>
                
                 </div>
              
             </div>


     
             <div className="a-content-ctn">
                 <div className="a-icon grow">
                 <img className="a-image" alt="Gears moving together" src={img4}></img>
                 </div>
                 <div className="a-info">
                     <h1 className="a-info-header">
                         The Process
                     </h1>
                     <p className="a-info-subtext">
                     After starting in January 2019, we have been able to validate our idea and begin developing the Beta version of the app. We continue to work day in and day out and hope to be on the market by the end of summer 2020. If there was ever a time where the world needed to be connected virtually through music, it's now.                     </p>
                   
                
                 </div>


         </div>



     
             <div className="a-content-ctn">
                 <div className="a-icon grow">
                     <img className="a-image-team" alt="Ben Salazar" src={img5}></img>
                 </div>
                 <div className="a-info">
                     <h1 className="a-info-header">
                         Ben Salazar
                     </h1>
                     <h2> Cofounder/CEO</h2>
                     <p className="a-info-subtext">
                     Ben is a pre-med student at Johns Hopkins University who hopes to pursue a career as a doctor one day. Mostly focusing on science courses during his time in school, he found his love for business during his freshman year in college when he decided to pick up an entrepreneurship minor and started taking business classes.                     </p>
                     <p className="a-info-subtext">
                     He started Lotus with high school football teammate and long time friend Rahad in order to share his love of music with all of his friends. His music interests include everything from house music and rap to rock and roll. In his free time, Ben enjoys playing the guitar, reading, and playing football with his friends.                     </p>
                
                 </div>
              
     
         </div>

              
 
             <div  className="a-content-ctn-rv">
                 <div className="a-icon grow">
                     <img className="a-image-team" alt="Rahad Khan" src={img6}></img>
                 </div>
                 <div className="a-info">
                     <h1 className="a-info-header">
                         Rahad Khan
                     </h1>
                     <h2> Cofounder/COO </h2>
                     <p className="a-info-subtext">
                     Rahad is a cofounder of Lotus who has a passion for technology and media. At an early age, he took a great interest in small gadgets, breaking them apart and fixing them to figure out how they work. He is a tech wiz amongst family and friends, often helping to fix their computers; he even started his own computer repair business at the age of 10. 
                     </p>
                     <p className="a-info-subtext">
                     In the following years, Rahad would dream of starting a business of his own. He started this journey earlier than expected as a senior in high school when he joined his long time friend Ben to start Lotus.                     </p>
                  
                
                 </div>
              
           

         </div>
     </div>



       

    </div>
)
}

export default About;