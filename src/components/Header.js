// Init
import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import  logo from "../assets/img/logo.svg"
import { Link } from "react-router-dom";
// Component
export default function Header({isDarkMode}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 767; // Adjust the breakpoint as needed
      const isLastSection = isMobile && window.innerHeight + window.scrollY >= document.body.offsetHeight;
      
      if (navbarOpen && !isLastSection) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarOpen]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <Fragment>
    {/* <div className="main-navbar">
    
    <nav className="navbar   navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand col-3 d-flex justify-content-center" href="#">
      
      <img src={meerab} className="img-fluid nav-logo nav-logo-mobile" alt="responsive"/>
      
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  pre_ul navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ul  me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link   active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">Our Mission</a>
          </li>
          <li className="nav-item ">
          <a className="nav-link  " href="#">About</a>
        </li>
       
        <li className="nav-item ">
        <a className="nav-link  " href="#">Contact Us</a>
      </li>
      
    
        </ul>
        <form className="d-flex col-4 ">
          <button className="btn btn-outline-success" type="submit">Join SSF</button>
        </form>
      </div>
    </div>
  </nav>
  </div> */}

   <Navbar expand="lg"  style={{zIndex:'1'}}  className="" bg="light"  variant="dark"  expanded={navbarOpen}>
     <Container>
     <Navbar.Brand>
     <Link to="/">
          <img
            src={logo}
            className="d-inline-block align-top logo-header"
            alt="Logo"
          />
        </Link>
     </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
      <img
            // src={!isDarkMode ? manu : manulight}
            className="d-inline-block align-top"
            alt="responsive"
          />

      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto  nav-li">
            <Link onClick={scrollTop}
              id="lihome"
              className="nav-link"
              to="/"
            >
              Home{" "}
            </Link>
            <Link
              id="liSolution"
              onClick={scrollTop}
              className="nav-link"
              to="/OurMission"
            >
              Our Mission
            </Link>
            <Link
              id="liservices"
              onClick={scrollTop}
              className="nav-link"
              to="/About"
            >
            About
            </Link>
           
            <Link
              id="liabout"
              onClick={scrollTop}
              className="nav-link"
              to="/ContactUs"
            >
             Contact Us
            </Link>
           
          </Nav>
          <div className=" payment-btnnn">

          <Button className="btn btn-outline-success" type="submit">Join SSF</Button>
</div>
 
      </Navbar.Collapse>
     </Container>

    </Navbar>
   
 
    </Fragment>
  );
}
