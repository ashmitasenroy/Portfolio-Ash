import navIcon1 from './assets/img/nav-icon1.svg';
import navIcon2 from './assets/img/nav-icon2.svg';
import navIcon3 from './assets/img/nav-icon3.svg';

function Footer(){
  return(
    <div className="Foot" style={{ backgroundColor: "#281839ff" }}>
      <span className="navbar-text">
      <div className="social-icon">   
                    <a href ="https://www.linkedin.com/in/ashmita-sen-roy/"><img src={navIcon1} alt= ""/></a>
                    <a href ="https://github.com/ashmitasenroy"><img src={navIcon2} alt= ""/></a>
                    <a href ="mailto:ashmitasenroy@gmail.com"><img src={navIcon3} alt= ""/></a>
      </div>
      </span>
      <br></br>
       <div className="Footer" >
                <p> © 2025 Ash-portfolio. All rights reserved.</p>
      </div>
      </div>
      

     
  );

}
export default Footer