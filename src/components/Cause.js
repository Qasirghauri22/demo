import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
const Cause = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
      ];

      

  return (
    <>
        <div className='container border-1 mt-5'>

<h1 className='support_your_case' >Support Your Cause</h1>
</div>
<div className="mt-5">
<Carousel breakPoints={breakPoints} pagination={false} >
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
  <Item>Four</Item>
  <Item>Five</Item>
  <Item>Six</Item>
  <Item>Seven</Item>
  <Item>Eight</Item>
</Carousel>
</div>
    </>

   
  )
}

export default Cause