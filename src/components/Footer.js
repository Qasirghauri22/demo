import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>

      <div className='container-fluid footer-main pt-5'>
        <div className='container footer  text-center mt-5'>
          <h3>JOIN OUR MAILING  LIST</h3>
          <p>Subscribe to receive inspiration, ideas, and news in your inbox.</p>
          <div className='col-12 input-content pt-3 '>
           
     

<div class="main-input ">
  <input type="text" class="input" placeholder="Your Email" />
  <button class=" input-btn">subscribe</button>
</div>

           
          </div>

          <ul>
            <li>Home</li>
            <li>Our Mission</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          
          <h5>Copyright © 2023 <a href='#'style={{textDecoration:"none",color:"#1B4079"}} >Sam Sahotra Foundation </a> .All rights reserved.</h5>
          
       

        </div>
      </div> 

    </Fragment>
  )
}

export default Footer