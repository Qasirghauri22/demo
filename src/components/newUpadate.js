import React, { Fragment } from 'react'
import first from '../assets/img/newupdated/first.png'
import second from '../assets/img/newupdated/second.png'
import third from '../assets/img/newupdated/Rectangle 140 (2).png'
function newUpadate() {
  return (
    <Fragment>
        <div className=' update-main pt-4  '>

         <div className='container '>
            <div className='row '>
                <div className='col-5 update-content  pt-5 mt-2'>
                    <h1>News and <br/>
Updates</h1>
                </div>
                <div className='col-7  update-contentt pt-5 mt-2 col-md-center  '>

             <p>Stay informed about the latest developments in  our charity campaign and how you can get involved</p>
                      
         <button className='mt-4'>View All</button>




                </div>
            </div>
            </div>    

            <div className='container  mt-4 pt-3'>
                <div className='row row-card boder'>

                <div class="update-card  col-3  ">
  <img src={first} class="card-img-top" alt="..."/>
  <div class="card-content">
    <div className=' date-content d-flex'>

     <div className='col-5 date-div mt-2 mb-2 '>
        31 may 2023 
     </div>
<h5 className='pt-2'>by admin</h5>

    </div>
    <h4>5 Ways to Get Involved in Your Local Charity Scene</h4>
    <p>From volunteering your time to donating money, there are endless ways to make a positive impact in your community</p>
         <button className='mt-3'>View All</button>
   
  </div>
</div>
<div class="update-card  col-3  ">
  <img src={second} class="card-img-top" alt="..."/>
  <div class="card-content ">
  <div className=' date-content d-flex'>

<div className='col-5 date-div mt-2 mb-2 '>
    31 may 2023 
</div>
<h5 className='pt-2'>by admin</h5>

</div>
    <h4>How Small Acts of Charity Can Make a Big Difference</h4>
    <p>From volunteering your time to donating money, there are endless ways to make a positive impact in your community</p>
         <button className='mt-3'>View All</button>
   
  </div>
</div>
<div class="update-card  col-3  ">
  <img src={third } class="card-img-top" alt="..."/>
  <div class="card-content">
  <div className=' date-content d-flex'>

<div className='col-5 date-div mt-2 mb-2 '>
    31 may 2023 
</div>
<h5 className='pt-2'>by admin</h5>

</div>
    <h4>The Top 10 Charities Making a Difference in 2023</h4>
    <p>From volunteering your time to donating money, there are endless ways to make a positive impact in your community</p>
         <button className='mt-3'>View All</button>
   
  </div>
</div>


                </div>
                
                </div>     

        </div>
    </Fragment>
    
  )
}

export default newUpadate