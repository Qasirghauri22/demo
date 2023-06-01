// import React from "react";
// import {
//   StackedCarousel,
//   ResponsiveContainer,
// } from "react-stacked-center-carousel";
// import Rectangle135 from "../assets/img/Rectangle 135.svg"
// import Rectangle136 from "../assets/img/Rectangle 136.svg"
// import Rectangle137 from "../assets/img/Rectangle 137.svg"
// import Group from "../assets/img/Group 1 (7).svg"
// import Back from "../assets/img/Untitled.svg"

// // import Fab from "@material-ui/core/Fab";
// // import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// // import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// export const data = [
//   {
//     cover: Rectangle135,
//     title: "Interstaller",
//   },
//   {
//     cover: Rectangle136,
//     title: "Inception",
//   },
//   {
//     cover: Rectangle137,
//     title: "Blade Runner 2049",
//   },
//   {
//     cover: Rectangle136,
//     title: "Inception",
//   },
//   {
//     cover: Rectangle137,
//     title: "Blade Runner 2049",
//   },
 

// ];


// export default function ResponsiveCarousel(props) {
//   const ref = React.useRef();
//   return (
//     <div className="sucess_story_slider" style={{ width: "100%", position: "relative" }}>
//       <ResponsiveContainer
//         carouselRef={ref}
//         render={(parentWidth, carouselRef) => {
//           // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
//           // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
//           // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
//           // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
//           let currentVisibleSlide = 5;
//           if (parentWidth <= 1440) currentVisibleSlide = 3;
//           if (parentWidth <= 1080) currentVisibleSlide = 1;
//           return (
//             <StackedCarousel
//               ref={carouselRef}
//               slideComponent={Card}
//               slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
//               carouselWidth={parentWidth}
//               data={data}
//               currentVisibleSlide={currentVisibleSlide}
//               maxVisibleSlide={5}
//               useGrabCursor
//             />
//           );
//         }}
//       />
//          {/* <Pagination centerSlideDataIndex={centerSlideDataIndex} /> */}
//       <>
//       <div   style={{ position: "absolute", top: "40%", left: 140, zIndex: 10 }}
//           size="small"
//           color="primary"  onClick={() => {
//             ref.current?.goBack();
//           }}> <img  src={Back} /></div>
        
//         {/* <Fab
//           style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
//           size="small"
//           color="primary"
//           onClick={() => {
//             ref.current?.goBack();
//           }}
//         >
//           <ArrowBackIcon />
//         </Fab> */}
//          <div style={{ position: "absolute", top: "40%", right: 160, zIndex: 10 }}   onClick={() => {
//             ref.current?.goNext(6);
//           }}  > 
//           <img src={Group} /> 
//           </div>
//         {/* <Fab
          
//           size="small"
//           color="primary"
//           onClick={() => {
//             ref.current?.goNext(6);
//           }}
//         >
//           <ArrowForwardIcon />
//         </Fab> */}
//       </>
//     </div>
//   );
// }

// // Very import to memoize your Slide component otherwise there might be performance issue
// // At minimum your should do a simple React.memo(SlideComponent)
// // If you want the absolute best performance then pass in a custom comparator function like below 
// export const Card = React.memo(function (props) {
//   const { data, dataIndex } = props;
//   const { cover } = data[dataIndex];
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 300,
//         userSelect: "none",
//       }}
//       className="my-slide-component"
//     >
//       <img
//         style={{
//           height: "100%",
//           width: "100%",
         
//           borderRadius: 0,
//         }}
//         draggable={false}
//         src={cover}
//       />
//     </div>
//   );
// });


import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
// import Fab from "@material-ui/core/Fab";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Group from "../assets/img/Group 1 (7).svg"
import Back from "../assets/img/Untitled.svg"
import Rectangle135 from "../assets/img/Rectangle 135.svg"
import Rectangle136 from "../assets/img/Rectangle 136.svg"
import Rectangle137 from "../assets/img/Rectangle 137.svg"
// import Group from "../assets/img/Group 1 (7).svg"
// import Back from "../assets/img/Untitled.svg"
export const data = [
  {
    cover: Rectangle135,
    title: "Interstaller",
  },
  {
    cover: Rectangle136,
    title: "Inception",
  },
  {
    cover: Rectangle137,
    title: "Blade Runner 2049",
  }
];


export default function ResponsiveCarousel(props) {
  const ref = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />
      <>
        {/* <Fab
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <ArrowBackIcon />
        </Fab> */}
        {/* <Fab
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <ArrowForwardIcon />
        </Fab> */}
      </>
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below 
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          
          borderRadius: 0,
        }}
        draggable={false}
        src={cover}
      />
    </div>
  );
});

