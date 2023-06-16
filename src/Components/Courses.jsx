import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../assets/azure.webp";
import courseImg2 from "../assets/react.webp";
import courseImg3 from "../assets/mongo.webp";
import courseImg4 from "../assets/aws1.webp"
import courseImg5 from "../assets/linux.webp"
import courseImg6 from "../assets/mysql.webp"
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Microsoft Azure Administration",
    week: 6,
    students: 5.5,
    price: 13000,
    imgUrl: courseImg1,
    url: "https://www.codeango.com/challenge-page/f5039517-3040-4ce1-8e8a-79468ad3cd7f",
  },

  {
    id: "02",
    title: "ReactJS Certification",
    week: 8,
    students: 2.5,
    price: 10000,
    imgUrl: courseImg2,
    url:"https://www.codeango.com/challenge-page/e842a69f-d264-447b-b383-dc3f36c5b2bb"
  },

  {
    id: "03",
    title: "MongoDB Certification",
    week: 8,
    students: 12.5,
    price: 13000,
    imgUrl: courseImg3,
    url:"https://www.codeango.com/challenge-page/62c42b72-da3c-4797-b40d-9ab3315f2927"
  },
  {
    id: "04",
    title: "AWS Solution Architect Certification",
    week: 8,
    students: 2.5,
    price: 18000,
    imgUrl: courseImg4,
    url:"https://www.codeango.com/challenge-page/655175d2-fd54-4ab2-9117-e725670e100a"
  },
  {
    id: "05",
    title: "Linux Administration Certification",
    week: 6,
    students: 8.5,
    price: 12000,
    imgUrl: courseImg5,
    url:"https://www.codeango.com/challenge-page/f8cd8d43-2cb2-4aa0-98ee-8ec4aca68260"
  },
  {
    id: "06",
    title: "MySQL Development Certification",
    week: 6,
    students: 3.4,
    price: 12000,
    imgUrl: courseImg6,
    url:"https://www.codeango.com/challenge-page/52c115d8-9bcd-4e86-abcc-aadd0a5dd483"
  },
];

const Courses = () => {
  return (
    <section className="p-5 blue" id='courses'>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 ">
            <div className="course__top  d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50 text-light">
                <h2>Our Most Demanding Courses</h2>                
              </div>

              <div className="w-50 text-end">
                <button className="btn btn-primary "><a href="https://www.codeango.com/challenges" className="h" >See All</a></button>
              </div>

            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
