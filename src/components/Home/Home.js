import React from "react";
import Books from "../../books";
import Header from "../../header";
import ScrollToTop from "../../scrolltotop";
import Navbar from '../../Navbar';
import Carousel from '../../Cauresol';

import "../../sass/style.css";
function Home(props) {

  return (

    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Header></Header>
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please for buying"}</h2>
      <br />
      <br />
      <br />
      <Books></Books>
      <ScrollToTop></ScrollToTop>

    </div>

  );
}

export default Home;
