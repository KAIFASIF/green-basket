import React from "react";

const Navbar = () => {
  return (
    <div className="flex p-4 bg-white shadow-xl  ">
      <div className="">
        {" "}
        <h1 className="font-semibold text-2xl text-lime-600">Green Basket</h1>
      </div>
      <div className="flex justify-center flex-1">
        <ul className="flex space-x-4">
          <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"> About us</li>
          <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"> Product</li>
          <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"> Blog</li>
          <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"> Shop</li>
          <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"> Services</li>
          <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"> Gallary</li>
          <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"> Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
