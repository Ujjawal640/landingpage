import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, week, students, price, url } = props.item;

  return (
    <div className="py-3">
    <div className="single__course__item text-light border-light border ">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-60" height="200px" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex text-light align-items-center gap-1">
            <i class="ri-book-open-line text-light"></i> {week} Weeks
          </p>

          <p className="students d-flex text-light align-items-center gap-1">
            <i class="ri-user-line text-light"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex text-light align-items-center gap-1">
            <i class="ri-price-tag-3-fill"></i> ₹ {price}
          </p>

          <p className="enroll d-flex text-light align-items-center gap-1">
            <a href={url}> Learn More</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseCard;
