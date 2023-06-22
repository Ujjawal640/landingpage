import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/bg.jpg";
import "./hero-section.css";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    course: "Choose a Course", // Radio button value
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
   
    let updatedValue = value;
    if (name === "course" && type === "text") {
      // Handle dropdown change
      updatedValue = event.target.textContent;
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://landingpagebackend-pdqf.onrender.com/send", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setFormData({
          name: "",
          email: "",
          number: "",
          course: "",
        });
      })

      setFormData({
        name: "",
        email: "",
        number: "",
        course: "",
      });
         
  };

  useEffect(() => {
    console.log(formData); // Log the updated form data whenever it changes
  }, [formData]);

  return (
    <div className="hero-div row g-0 row-cols-2" id="herosec">
      <div className="col left-hero-div">
        <img src={heroImg} alt="" className="hero__img img-responsive" />
      </div>

      <div className="col right-hero-div">
        <div className="center ">
          <div className="border-black border-3">
            <div className="form-div ">
              <form
                className="elementor-form"
                id="form"
                onSubmit={handleSubmit}>
                <div>
                  <div className="hero__content">
                    <h2 className="mb-4 hero__title">
                      Book a <span style={{ color: "orange" }}>FREE</span> Demo
                      Now
                    </h2>
                  </div>
                  <div>
                    <p className="few_seat">Last few seats left. Hurry up!</p>
                  </div>
                  <label for="username">
                    Name{" "}
                    <span style={{ color: "red" }}>
                      <b>*</b>
                    </span>
                  </label>

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
                  <label for="email">
                    Email
                    <span style={{ color: "red" }}>
                      <b>*</b>
                    </span>
                  </label>
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
                  <label for="number">
                    Contact Number
                    <span style={{ color: "red" }}>
                      <b>*</b>
                    </span>
                  </label>
                  <input
                    name="number"
                    id="number"
                    placeholder="Enter your Mobile Number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div class="dropdown my-3">
                <div class="btn-group w-100 border-black border-4">
  <button type="button" class="btn border-black border-1 w-100 bg-light  text-black ">{formData.course}</button>
  <button type="button" class="btn border-black border-1  bg-light text-black dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden bg-light text-black">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu w-100">
    <li><a class="dropdown-item w-100" value={formData.course} name="course" type="text" onClick={handleChange}>Full Stack Web Development </a></li>
    <li><a class="dropdown-item w-100" value={formData.course} name="course" type="text" onClick={handleChange}>Full stack Software Development</a></li>
    <li><a class="dropdown-item w-100" value={formData.course} name="course" type="text" onClick={handleChange}>Database Development</a></li>
    <li><a class="dropdown-item w-100" value={formData.course} name="course" type="text" onClick={handleChange}>Cloud Computing</a></li>
    <li><a class="dropdown-item w-100" value={formData.course} name="course" type="text" onClick={handleChange}>Android Developer</a></li>
  </ul>
</div></div>

                <button className="action-btn" type="submit">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
