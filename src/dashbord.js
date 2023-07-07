import React from "react";
import Books from "./books";
import Header from "./header";
import ScrollToTop from "./scrolltotop";
import "./sass/style.css";

const Dashbord = () => {
    return (
        <div>

            <Books></Books>
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default Dashbord;
