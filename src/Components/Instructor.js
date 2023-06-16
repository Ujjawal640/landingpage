import React from 'react';
import './Navbar.css';
import instructor from "../assets/hero-img1.png"




const Instructor = () => {
  return (
    <div>
       <div className="InstructorContainer blue p-5 ">
      <div className="InstructorTitle">About the Instructor</div>
      <img className="InstructorImage" src={instructor} alt="Instructor" />
      <div className="InstructorInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra purus et leo semper interdum. Aliquam fermentum arcu ut nunc consequat malesuada.</div>
      <div className="InstructorInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra purus et leo semper interdum. Aliquam fermentum arcu ut nunc consequat malesuada.</div>
      {/* Additional instructor information */}
    </div>
    </div>
  )
}

export default Instructor
