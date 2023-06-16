import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/heropage.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
  
          
          <div className="row m-5" id="herosec">
            <div  className="col mx-auto my-auto">
              <div className="imgcenter text-center">
              <img src={heroImg} className="hero__img" height="350px" width="400px"/>
              <div style={{"marginTop":"50px"}}>
                  <h3 className="job">With 100% JOB Gurantee</h3>
              </div>
              </div>
                <br/>
                <div>
                </div>                
            </div>
            <div className=" col-6 col-xs-4">  
            <div className="center p-5" >  
            <div className="card">         
              <div className="form-div ">
                <form className="elementor-form" id="form">
                  <div>                  
                    <div className="hero__content">
                        <h2 className="mb-4 hero__title">Book a <span style={{"color":"orange"}}>FREE</span> Demo Now</h2>
                    </div>
                    <div>
                      <p className="few_seat">Last few seats left. Hurry up!</p>
                    </div>
                  <label for="username">Name <span style={{"color":"red"}}><b>*</b></span></label>
                  
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your Name"
                  />                  
                </div>
                <div>
                  <label for="email">Email<span style={{"color":"red"}}><b>*</b></span></label>                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email ID"
                  />
                </div>
                <div>
                  <label for="number">Contact Number<span style={{"color":"red"}}><b>*</b></span></label>                  
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your Mobile Number"
                  />
                </div >
                <div className="exper">
                  <label for="email">Experience<span style={{"color":"red"}}><b>*</b></span></label>   <br/>
                  <div className="d-flex p-4">
                  <input className="radiobtn"
                    type="radio"
                    name="exp" size="2px"/>
                    <p style={{"marginTop":"-3%"}}>Working Professional - Technical Roles</p>
                  </div>               
                  

                  <div className="d-flex ex p-4">
                  <input className="radiobtn"
                    type="radio"
                    name="exp" size="2px"/>
                    <p style={{"marginTop":"-3%"}}>Working Professional - Non Technical</p>
                  </div>  

                  <div className="d-flex ex p-4">
                  <input className="radiobtn"
                    type="radio"
                    name="exp" />
                    <p style={{"marginTop":"-3%"}}>College Student - Final Year</p>
                  </div>  

                  <div className="d-flex ex p-4">
                  <input className="radiobtn"
                    type="radio"
                    name="exp" size="2px"/>
                    <p style={{"marginTop":"-3%"}}>Others</p>
                  </div>  
                </div>

                <a href="#"  className="action-btn">Book Now</a>               
              </form>
            </div>
            </div>
            </div>     
          </div>
          </div> 
        
    
  );
};

export default HeroSection;
