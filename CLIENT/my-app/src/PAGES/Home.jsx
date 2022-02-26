//IMPORTS
import React from "react";
import Announcment from "../COMPONENTS/Announcment";
import Categories from "../COMPONENTS/Categories";
import Footer from "../COMPONENTS/Footer";
import NavBar from "../COMPONENTS/NavBar";
import Newsletter from "../COMPONENTS/Newsletter";
import Products from "../COMPONENTS/Products";
import Slider from "../COMPONENTS/Slider";
//PAGE HOME
function Home() {
  return (
    <div>
      <Announcment />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
//EXPORT
export default Home;
