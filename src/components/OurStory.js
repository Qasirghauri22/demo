import React, { Fragment } from 'react'
 import Ourstory from "../assets/img/Rectangle 131.png" ;
 import OurstoryCard from "../assets/img/Rectangle 132.png"
 function OurStory() {
  console.log('checking...... checking')
  return (
    <Fragment>
    <div className='container-fluid w-100 p-0 mt-5'>
    <div className="card ">
  <div className="row g-0">
    <div className="col-md-6 ">
      <img src={Ourstory} className="img-fluid ourstory-img" alt="..."/>
    </div>
    <div className="col-md-6 our-story-right-top">
      <div className='row d-flex justify-content-center align-content-center'>
        <div className='col-md-10 mt-5'>
        <div className="card-body">
        <h5 className="card-title mt-5 pt-4">Our Story</h5>
        <p  className="card-text card-text_p_support mt-4">We support causes such as education, healthcare, and poverty alleviation. Its founder, Sam Sahotra, is dedicated to making a positive impact on individuals and communities worldwide through philanthropy.
        </p>
        </div>
        </div>
      </div>
  
    </div>
  </div>
  <div className="row g-0 flex-wrap-reverse">
  <div className="col-md-6 our-story-left-bottom">
  <div className='row d-flex justify-content-center align-content-center'>
        <div className='col-md-10 mt-5'>
        <div className="card-body">
        <h5 className="card-title mt-5 pt-4">Our Mission</h5>
        <p  className="card-text card-text_p_support mt-4">We support causes such as education, healthcare, and poverty alleviation. Its founder, 
        </p>
        </div>
        </div>
      </div>
    </div>
    <div className="col-md-6 ">
    <img src={OurstoryCard} className="img-fluid w-100  h-100 " alt="..."/>
    
   </div>
 
  </div>
    
</div>
    
    
    </div>
    </Fragment>
  )
}

export default OurStory
