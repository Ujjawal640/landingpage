import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/heropage.png";
import "./hero-section.css";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    experience: '', // Radio button value
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedValue = type === 'radio' ? (checked ? value : '') : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/.netlify/functions/sendEmail/send', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setFormData({
          name: '',
          email: '',
          number: '',
          experience: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  };





  return (
  
          
          <div className="row g-0 row-cols-2" id="herosec">
            <div className="col">
              <img src={heroImg} alt=""  className="hero__img img-responsive"/>
            </div>
            
            <div className=" col">  
            <div className="center  " >  
          
            <div className="border-black border-3">         
              <div className="form-div ">
                <form className="elementor-form" id="form" onSubmit={handleSubmit}>
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
                    value={formData.name}
                    onChange={handleChange}
                  />                  
                </div>
                <div>
                  <label for="email">Email<span style={{"color":"red"}}><b>*</b></span></label>                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email ID"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label for="number">Contact Number<span style={{"color":"red"}}><b>*</b></span></label>                  
                  <input
                    
                    name="number"
                    id="number"
                    placeholder="Enter your Mobile Number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div >
                <div className="exper">
                  <label for="email">Experience<span style={{"color":"red"}}><b>*</b></span></label>   <br/>

                  <div class="form-check p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="Working Professional - Technical Roles"
                    checked={formData.experience === 'Working Professional - Technical Roles'}
                    onChange={handleChange}  />
  <label class="form-check-label" for="flexRadioDefault1">
  Working Professional - Technical Roles
  </label>
</div>

<div class="form-check p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"   value="Working Professional - Non Technical"
                   checked={formData.experience === 'Working Professional - Non Technical'}
                  onChange={handleChange}  />
  <label class="form-check-label" for="flexRadioDefault1">
  Working Professional - Non Technical
  </label>
</div>

<div class="form-check p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="College Student - Final Year"
          checked={formData.experience === 'College Student - Final Year'}
          onChange={handleChange} />
  <label class="form-check-label" for="flexRadioDefault1">
  College Student - Final Year
  </label>
</div>

<div class="form-check p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="Others"
          checked={formData.experience === 'Others'}
          onChange={handleChange}  />
  <label class="form-check-label" for="flexRadioDefault1">
  Others  </label>
</div>


                 
                </div>

                
                <button className="action-btn" type="submit">Book Now</button>            
              </form>
            </div>
            </div>
            </div>     
          </div>
          </div> 
        
    
  );
};

export default HeroSection;
