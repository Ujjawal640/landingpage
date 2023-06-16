import React from 'react'
import './Navbar.css';

const Callback = () => {
  return (
    <div className="yellow p-4 " id='callback'>
      <section>
      <div className="container newsletter">
     <div className="px-3">
          <div className="row">
              <div className="col py-4 text-light">
                  <h2>Request Callback</h2>
      <div className='py-2 m-0' >
      <p>
      Only for working professionals
      or
      Final year Students
          </p>
      
      </div>
      
              </div>
      
       <div className="col ms-auto">
      
      <div className="form-group row">
      
      <div className="col  input-group  p-3 flex-nowrap ">
      <div className="col-xs-2">
      <input type="text" className="form-control inpu" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
      </div>
      
      <div className="col  input-group  p-3 flex-nowrap ">
       <div className="col-xs-2">
        <input type="text" className="form-control inpu" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      </div>
      
      </div>
      
      <div className="form-group row row-col-2">

      <div className="col input-group  p-3 flex-nowrap">
       <div className="col-xs-2">
        <input type="text" className="form-control inpu " placeholder="Phone Number" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      </div>
      <div className="col col-xs-4  p-3 ">
          <div className="d-grid ">
      <button type="button" className="btn  btn-light ytext ">Submit</button>
      </div>
      </div>
      
      
      </div>
      
      
      
      </div>
            </div>
            </div>  
      </div>
    </section>
      </div>
    
   
  )
}

export default Callback

/*

 <div className="col ">

<p>
             Only for working professionals
              or
             Final year Students
           </p>

<div className="col  input-group  p-3 flex-nowrap ">
<div className="col-xs-2"> 
<input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
  </div>
</div>

<div className="col  input-group  p-3 flex-nowrap ">
 <div className="col-xs-2">
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
</div>

</div>

<div className="col">
<div className=" input-group  p-3 flex-nowrap">
 <div className="col-xs-3">
  <input type="text" className="form-control  " placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
</div>

<div className=" p-3">
    <div className="d-grid">
<button type="button" className=" btn btn-primary">Submit</button>
</div>
</div>
</div>*/