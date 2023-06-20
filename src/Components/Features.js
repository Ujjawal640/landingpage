import React from 'react'
import './Navbar.css';
import interview from "../assets/job-interview.png"
import live from "../assets/live-streaming.png"
import video  from "../assets/video (1).png"
import recording  from "../assets/vinyl.png"
import cal  from "../assets/calendar.png"
import teacher  from "../assets/teacher.png"
import certificate  from "../assets/certificate.png"
import working  from "../assets/working.png"
import email  from "../assets/email.png"


const Features = () => {
  return (
    <div className='blue features'>
      <div className="">
        <div className="text-center text-light  p-3">
        <h3 className='fs-3'>The Features That Makes Us Unique</h3>
        </div>
<div className="p-4">
<div class="container text-center">
  <div class="row row-col-3">

    <div class="col    col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card  my-2">
  <div class="card-body">
    <h5 class="card-title">Live Classes</h5>
  </div>
  <img src={live} class=" im mx-auto p-2" alt=""/>
</div>
      </div>
    </div>


    
    <div class="col   col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card  my-2">
  <div class="card-body">
    <h5 class="card-title">Interview preparation</h5>
  </div>
  <img src={interview} class=" im mx-auto p-2" alt="..."/>
</div>
      </div>
    </div>
    <div class="col    col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card  my-2">
  <div class="card-body">
    <h5 class="card-title">Study Material</h5>
  </div>
  <img src={video} class=" im mx-auto" alt="..."/>
</div>
      </div>
    </div>
    <div class="col    col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card  my-2">
  <div class="card-body">
    <h5 class="card-title ">Recording Of Each Session</h5>
  </div>
  <img src={recording} class="im mx-auto p-2" alt=""/>
</div>
      
      </div>
    </div>
    <div class="col   col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card  my-2">
  <div class="card-body">
    <h5 class="card-title">Flexible Schedule</h5>
  </div>
  <img src={cal} class=" im mx-auto  p-2" alt="..."/>
</div>
      </div>
    </div>
    <div class="col    col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card  my-2">
  <div class="card-body">
    <h5 class="card-title">Expirenced Faculty</h5>
  </div>
  <img src={teacher} class=" im mx-auto " alt="..."/>
</div>
      </div>
    </div>


    <div class="col    col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card  my-2">
  <div class="card-body">
    <h5 class="card-title">Certificate of Completion</h5>
  </div>
  <img src={certificate} class="im mx-auto p-2" alt=""/>
</div>
      
      </div>
    </div>



    <div class="col    col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card my-2">
  <div class="card-body">
    <h5 class="card-title">Internship Guranteed </h5>
  </div>
  <img src={working} class="im mx-auto p-2" alt=""/>
</div>
      
      </div>
    </div>


    <div class="col    col-md-4 col-sm-4 col-lg-4">
      <div class=" bg-light">
      <div class="card my-2">
  <div class="card-body">
    <h5 class="card-title">Job Guranteed</h5>
  </div>
  <img src={email} class="im mx-auto p-2" alt=""/>
</div>
      
      </div>
    </div>
 
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Features
