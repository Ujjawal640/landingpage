import React from 'react'
import './Navbar.css';
import pdf from '../assets/fsd course book.pdf'


function Price2() {
  return (
    <div className=' p-2'>
      <div className=" text-danger text-center container p-5 ">
        <strong><h1 className='d-inline fw-bold'>Price : </h1></strong>
        <h1 className='text-decoration-line-through d-inline mx-2'> 25000 </h1>
        <h1 className=' d-inline'>   9999 </h1>
        
</div>
<div className="container text-center p-2">
<button type="button" class="btn yellow m-3 bt mx-auto"><a href="#herosec" className="h" >Apply Now</a></button>
</div>
<div className="container text-center p-2">
<button type="button" class="btn yellow m-3 bt mx-auto">
  <a href={pdf} className="h" download>Download cirriculum</a>
</button>
</div>
    </div>
  )
}

export default Price2
