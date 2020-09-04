import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <NewsLetter />
      <Footer />  
    </>
  );
};

export default Layout;
