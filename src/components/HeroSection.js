import React, { Fragment, useState } from "react";
// import  DOLLAR from "../assets/img/dollar.svg"
const HeroSection = () => {
  const [amount, setAmount] = useState(false)
  const HandleChange = () => {
    setAmount(true)
  }
  return (
    <Fragment>
    <header>

    <div className="container-fluid col-md-12 p-0 main-img" >
    <div className="container  ">
      
    <div className="row main-content ">
    
    <div className="col-md-7">
    
    <div className="header_content">
    <p>We're worldwide non-profit charity</p>
    <h1 className="header_h1 " >Together we <br/> make a difference</h1>
    <button className="btn btn_learnmore mt-4">learn more</button>
    
    
    </div>
    </div>



    
    <div className="col-md-5 donation-main" >
    
    <h2>Choose an amount to give</h2>
    <p>Your donation can give people clean water every <br/> year. 100% funds water projects.</p>

    <div className="row custom-account ">
    <div className="col-6 dollor-sign ">
    <div className='dollar-logo'></div>
    <h2>100.00</h2>
  
    </div>
    </div>

    <div className="row custom-account col-sm-12  pt-3">
    <div className="col-3  dollor-sign1 ">$10.00</div>
    <div className="col-3  dollor-sign1 ">$25.00</div>
    <div className="col-3  dollor-sign1 ">$50.00</div>
    <div className="col-3  dollor-sign1 ">$100.00</div>
    <div className="col-3  dollor-sign1 ">$250.00</div>
    </div>
    {!amount ? <><button onClick={HandleChange} className="custom-Amount">Custom Amount</button></> : <>  <input className="custom-Amount" type="number"  placeholder="Custom Amount"/></>}
    
  
     <button className=" donate-now btn">Donate Now</button>
    </div>  




    </div>
    </div>

    </div>
    </header>
    
    </Fragment>
  )
}

export default HeroSection
