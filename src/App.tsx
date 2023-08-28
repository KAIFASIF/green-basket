import React from "react";
import Navbar from "./components/Navbar";
import TopProducts from "./screens/TopProducts";
import About from "./screens/About";
import Services from "./screens/Services";
import Deals from "./screens/Deals";
import Home from "./screens/Home";

const App = () => {
  return (
    <div className="bg-white overflow-clip">
      <Navbar />
      <section className="flex justify-center">
        <Home />
      </section>
      <section className="flex justify-center  bg-gray-100">
        <TopProducts />
      </section>
      <section className="flex justify-center">
        <About />
      </section>
      <section className="flex justify-center w-full bg-gray-100">
        <Services />
      </section> 
      <section className="flex justify-center w-full">
        <Deals />
      </section>
    </div>
  );
};

export default React.memo(App);
