import React, { Fragment } from 'react'
import whopic from "../assets/img/wohweare.svg"
function whoWe() {
  return (
    <Fragment>


      <div className='container   whowe-main'>

        <div className='row d-flex justify-content-center'>
          <div className='col-md-8'>
            <div className='who-we text-center ' >
              <p>who we are</p>
              <h2>We support causes such as education, healthcare, and poverty alleviation.</h2>

            </div>

          </div>
        </div>


        <div className='row'>

          <div className='col-6 '>
            <img src={whopic} className="whowe-img pt-2 mt-4 m-lg-5"></img>
          </div>
          <div className='col-md-6 content-box  paragraph'>

            <p className="mt-5  pt-5">Its founder, Sam Sahotra, is dedicated to making a positive impact on individuals and communities worldwide through philanthropy.</p>
            <div className='col-12 d-flex mt-5 '>
              <div className='col-2  '>
                <div className='education-img m-lg-2'></div>
              </div>
              <div className='col-10 whowe-h4  '>
                <h4>Education</h4>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  <br />  aliquam erat volutpat.</p>
              </div>

            </div>

            <div className='col-12 mt-3 d-flex '>
              <div className='col-2 '>
                <div className='health-img m-lg-2'></div>

              </div>
              <div className='col-10 whowe-h4 '>
                <h4>Health</h4>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna <br /> aliquam erat volutpat.</p>

              </div>

            </div>





            <div className='col-12  mt-3 d-flex '>
              <div className='col-2 '>
                <div className='food-img m-lg-2'></div>

              </div>
              <div className='col-10 whowe-h4 '>
                <h4>Food</h4>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna  <br />  aliquam erat volutpat.</p>
              </div>
            </div>
            <button className='read-more  btn'>Read More</button>

          </div>
        </div>









      </div>
    </Fragment>
  )
}

export default whoWe
